import { site, apps } from './content.js';
import { icons } from './icons.js';

const root = document.documentElement;
const $ = (selector) => document.querySelector(selector);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const els = {
  scenes: $('#scenes'),
  blocks: $('#blocks'),
  fan: $('#fan'),
  pad: $('#fan-pad'),
  deck: $('#deck'),
  cards: $('#fan-cards'),
  details: $('#details'),
  about: $('#about'),
  topbar: $('#topbar'),
  brand: $('#brand'),
  githubTop: $('#github-top'),
  announce: $('#announce'),
  themeColor: $('meta[name="theme-color"]'),
};

const state = { cur: 0, fanOpen: false, unlocked: false, relockAtTop: false };

const githubFor = (app) => app.github || site.githubProfile || '#';
const ctxFor = (app) => ({ icons, site, github: githubFor(app), download: app.download });
const scrollBehavior = () => (reducedMotion.matches ? 'auto' : 'smooth');

/* ---------- Rendering ---------- */

function cardHtml(app, i) {
  return `
    <button type="button" class="fan-card" data-index="${i}" tabindex="-1" aria-label="${app.name}: ${app.line}">
      <span class="fan-card-in" style="--card-bg: ${app.theme.bg}; --card-ink: ${app.theme.ink}; animation-delay: -${(i * 0.6).toFixed(1)}s">
        <span class="fan-card-top"><span>${app.number}</span><span class="fan-here">Here</span></span>
        <span class="fan-card-art">${app.cardArt}</span>
        <span class="fan-card-name" style="font-family: ${app.nameFont}">${app.name}</span>
        <span class="fan-card-line">${app.line}</span>
      </span>
    </button>`;
}

function aboutHtml() {
  const email = site.email
    ? `<a class="btn btn-light" href="mailto:${site.email}">${site.email}</a>`
    : `<a class="btn btn-light" href="#">[you@domain]</a>`;
  return `
    <div class="wrap about-inner">
      <div class="about-copy">
        <span class="eyebrow about-eyebrow">About</span>
        <p class="about-title">Hi, I'm ${site.aboutName || site.name}.</p>
        ${[].concat(site.about).map((p) => `<p class="about-text">${p}</p>`).join('')}
        ${site.note ? `<p class="about-note">${site.note}</p>` : ''}
      </div>
      <div class="about-links">
        ${email}
        <a class="btn btn-ghost-light" href="${site.githubProfile || '#'}">${icons.code} GitHub profile</a>
      </div>
    </div>`;
}

function render() {
  els.brand.textContent = site.name;
  els.scenes.innerHTML = apps.map((a) => `<div class="scene" data-app="${a.id}">${a.scene}</div>`).join('');
  els.blocks.innerHTML = apps.map((a) => `<div class="block" data-app="${a.id}">${a.hero(ctxFor(a))}</div>`).join('');
  els.cards.innerHTML = apps.map(cardHtml).join('');
  els.about.innerHTML = aboutHtml();
}

/* ---------- Corner fan ---------- */

// Positions are relative to each card's resting spot in the bottom-right corner.
// Closed: a small hand of mini cards peeking from the corner.
// Open: the cards spread along an arc up and to the left.
function layoutFan() {
  const n = apps.length;
  const open = state.fanOpen;
  const radius = 360 + Math.max(0, n - 4) * 40;
  [...els.cards.children].forEach((card, i) => {
    let x;
    let y;
    let r;
    let s;
    if (open) {
      const angle = n === 1 ? 120 : 161 - i * (66 / (n - 1));
      const rad = (angle * Math.PI) / 180;
      x = -60 + radius * Math.cos(rad) + 85;
      y = -20 - radius * Math.sin(rad) + 112;
      r = -(angle - 90) * 0.38;
      s = 1;
    } else {
      const k = n === 1 ? 0.5 : i / (n - 1);
      x = 39 - (n - 1 - i) * 16;
      y = 58;
      r = -12 + k * 24;
      s = 0.34;
    }
    card.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) rotate(${r.toFixed(1)}deg) scale(${s})`;
    card.style.transitionDelay = `${(open ? i * 0.04 : (n - 1 - i) * 0.03).toFixed(2)}s`;
    card.style.zIndex = String(10 + i);
    card.tabIndex = open ? 0 : -1;
  });
}

function setFan(open, { focusCards = false, returnFocus = false } = {}) {
  state.fanOpen = open;
  els.fan.classList.toggle('is-open', open);
  els.deck.setAttribute('aria-expanded', String(open));
  layoutFan();
  if (open && focusCards) els.cards.children[state.cur]?.focus();
  if (!open && returnFocus) els.deck.focus();
}

/* ---------- Switching apps: the colours are replaced ---------- */

function show(i, { initial = false } = {}) {
  const app = apps[i];
  state.cur = i;
  root.style.setProperty('--bg', app.theme.bg);
  root.style.setProperty('--ink', app.theme.ink);
  root.style.setProperty('--hdr', app.theme.header);
  els.themeColor?.setAttribute('content', app.theme.bg);
  document.title = `${app.name} · ${site.name}`;
  [...els.scenes.children].forEach((el, k) => el.classList.toggle('is-on', k === i));
  [...els.blocks.children].forEach((el, k) => el.classList.toggle('is-on', k === i));
  [...els.cards.children].forEach((el, k) => {
    el.classList.toggle('is-current', k === i);
    el.setAttribute('aria-current', k === i ? 'true' : 'false');
  });
  els.details.innerHTML = app.details(ctxFor(app));
  els.githubTop.href = githubFor(app);
  if (initial) return;
  els.announce.textContent = `Now showing ${app.name}`;
  history.replaceState(null, '', `#${app.id}`);
  if (state.unlocked) {
    window.scrollTo(0, 0);
    lock();
  }
}

/* ---------- Scroll lock: the page only scrolls after "Know more" ---------- */

function lock() {
  state.unlocked = false;
  state.relockAtTop = false;
  root.classList.add('locked');
}

function unlock() {
  state.unlocked = true;
  root.classList.remove('locked');
}

function reveal(target) {
  setFan(false);
  unlock();
  state.relockAtTop = false;
  requestAnimationFrame(() => target.scrollIntoView({ behavior: scrollBehavior(), block: 'start' }));
}

function backToTop() {
  setFan(false);
  if (!state.unlocked) return;
  if (window.scrollY < 4) {
    lock();
    return;
  }
  state.relockAtTop = true;
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
}

function onScroll() {
  els.topbar.classList.toggle('is-scrolled', window.scrollY > 8);
  if (state.relockAtTop && window.scrollY < 4) {
    lock();
    return;
  }
  // Something scrolled the locked page anyway (find in page, a link, keyboard focus):
  // let it scroll instead of leaving it stuck halfway.
  if (!state.unlocked && !state.relockAtTop && window.scrollY > 0) unlock();
}

// While the page is locked, scrolling down does what "Know more" does.
// For a moment afterwards, wheel input is swallowed so trackpad momentum
// doesn't fight the smooth scroll down to the details.
let guardUntil = 0;
function scrollIntent() {
  if (state.unlocked || state.fanOpen) return false;
  guardUntil = Date.now() + 700;
  reveal(els.details);
  return true;
}

function indexFromHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  return apps.findIndex((a) => a.id === id);
}

/* ---------- Events ---------- */

let fanTimer = 0;
let openedAt = 0;

els.fan.addEventListener('mouseenter', () => {
  clearTimeout(fanTimer);
  if (!state.fanOpen) {
    openedAt = Date.now();
    setFan(true);
  }
});
els.fan.addEventListener('mouseleave', () => {
  clearTimeout(fanTimer);
  fanTimer = setTimeout(() => setFan(false), 220);
});
els.deck.addEventListener('click', (e) => {
  // On touch screens a tap fires a hover first; don't let the click close the fan again.
  if (state.fanOpen && Date.now() - openedAt < 450) return;
  setFan(!state.fanOpen, { focusCards: e.detail === 0 });
});
els.pad.addEventListener('click', () => setFan(false));
els.cards.addEventListener('click', (e) => {
  const card = e.target.closest('.fan-card');
  if (!card) return;
  const i = Number(card.dataset.index);
  if (i === state.cur) {
    setFan(false, { returnFocus: e.detail === 0 });
    return;
  }
  setFan(false);
  show(i);
});

document.addEventListener('click', (e) => {
  // Links marked data-track (the download buttons) count as GoatCounter events.
  const tracked = e.target.closest('[data-track]');
  if (tracked) window.goatcounter?.count?.({ path: tracked.dataset.track, title: tracked.textContent.trim(), event: true });
  const target = e.target.closest('[data-action]');
  if (!target) return;
  const action = target.dataset.action;
  if (action === 'more') {
    e.preventDefault();
    reveal(els.details);
  } else if (action === 'about') {
    e.preventDefault();
    reveal(els.about);
  } else if (action === 'top') {
    e.preventDefault();
    backToTop();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.fanOpen) {
    setFan(false, { returnFocus: true });
    return;
  }
  if (!state.unlocked && ['ArrowDown', 'PageDown', ' ', 'End'].includes(e.key)) {
    const tag = (e.target.tagName || '').toLowerCase();
    if (['button', 'a', 'input', 'textarea', 'select'].includes(tag)) return;
    if (scrollIntent()) e.preventDefault();
  }
});

let wheelSum = 0;
let wheelReset = 0;
window.addEventListener('wheel', (e) => {
  if (Date.now() < guardUntil) {
    e.preventDefault();
    return;
  }
  // ctrlKey is a trackpad pinch-zoom, not a scroll.
  if (state.unlocked || state.fanOpen || e.ctrlKey || e.deltaY <= 0) return;
  // Add up small trackpad deltas so a resting finger doesn't trigger it.
  wheelSum += e.deltaMode === 0 ? e.deltaY : e.deltaY * 16;
  clearTimeout(wheelReset);
  wheelReset = setTimeout(() => { wheelSum = 0; }, 200);
  if (wheelSum > 24) {
    wheelSum = 0;
    e.preventDefault();
    scrollIntent();
  }
}, { passive: false });
let touchStartY = null;
window.addEventListener('touchstart', (e) => { touchStartY = e.touches[0] ? e.touches[0].clientY : null; }, { passive: true });
window.addEventListener('touchmove', (e) => {
  if (touchStartY === null || !e.touches[0]) return;
  if (touchStartY - e.touches[0].clientY > 40) {
    touchStartY = null;
    scrollIntent();
  }
}, { passive: true });
window.addEventListener('scroll', onScroll, { passive: true });

// Keyboard users tabbing past the hero reach the details: open them up.
document.addEventListener('focusin', (e) => {
  if (!state.unlocked && (els.details.contains(e.target) || els.about.contains(e.target))) unlock();
});

window.addEventListener('hashchange', () => {
  const i = indexFromHash();
  if (i !== -1 && i !== state.cur) show(i);
});

/* ---------- Start ---------- */

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);
render();
// With a single app there is nothing to switch to, so hide the corner fan.
els.fan.hidden = apps.length < 2;
const start = indexFromHash();
show(start === -1 ? 0 : start, { initial: true });
layoutFan();
onScroll();
// Fade the first app in. The timer covers tabs opened in the background,
// where animation frames don't run until the tab is shown.
const ready = () => root.classList.add('is-ready');
requestAnimationFrame(() => requestAnimationFrame(ready));
setTimeout(ready, 150);
