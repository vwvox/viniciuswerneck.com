// Placeholder apps that show how the page looks with several apps.
// Remove them from js/content.js before launch, or turn each into a real app
// (copy js/apps/mirna.js as a starting point).

function placeholderApp({ id, number, name, status, theme, details, scene, cardArt }) {
  return {
    id,
    number,
    name,
    line: '[What it does]',
    theme,
    nameFont: 'var(--font-display)',
    github: '',
    scene,
    cardArt,

    hero: ({ icons, github }) => `
      <div class="hero-copy">
        <span class="eyebrow s s1">No. ${number} · [Category]</span>
        <h1 class="hero-name s s2">${name}</h1>
        <p class="hero-line s s3">[What it does, in one line]</p>
        <p class="hero-sub s s4">[A sentence on why it's worth trying.]</p>
        <div class="hero-actions s s5">
          <button type="button" class="btn btn-solid" data-action="more">Know more ${icons.arrowDown}</button>
          <a class="btn btn-outline" href="${github}">${icons.code} GitHub</a>
          <span class="status-chip">${status}</span>
        </div>
      </div>`,

    details: ({ icons, github }) => `
      <div class="section details-generic" style="--d-bg: ${details.bg}; --d-ink: ${details.ink}; --d-card: ${details.card}; --d-card-ink: ${details.cardInk}">
        <div class="wrap stack">
          <div class="intro">
            <span class="eyebrow">${name} · ${status}</span>
            <h2 class="g-h2">[A headline about what it does]</h2>
            <p class="d-lead">[Two or three sentences on what it does and who it's for.]</p>
          </div>
          <div class="grid grid-3">
            <article class="feature g-feature"><h3>[Feature]</h3><p>[One line on what it does]</p></article>
            <article class="feature g-feature"><h3>[Feature]</h3><p>[One line on what it does]</p></article>
            <article class="feature g-feature"><h3>[Feature]</h3><p>[One line on what it does]</p></article>
          </div>
          <div class="grid grid-3">
            <div class="g-shot">[Screenshot]</div>
            <div class="g-shot">[Screenshot]</div>
            <div class="g-shot">[Screenshot]</div>
          </div>
          <div class="d-actions">
            <a class="btn btn-inverse" href="${github}">${icons.code} ${name} on GitHub</a>
            <button type="button" class="btn btn-outline" data-action="top">Back to top</button>
          </div>
        </div>
      </div>`,
  };
}

const app2 = placeholderApp({
  id: 'app-2',
  number: '02',
  name: '[App 2]',
  status: 'In the workshop',
  theme: { bg: '#FF6B4A', ink: '#1A1010', header: 'rgba(255, 107, 74, 0.9)' },
  details: { bg: '#FFE8D6', ink: '#1A1010', card: '#FFFFFF', cardInk: '#1A1010' },
  scene: `
    <svg class="scene-fill" viewBox="0 0 1280 860" preserveAspectRatio="xMidYMid slice">
      <circle cx="1000" cy="420" r="300" fill="#FFE8D6"/>
      <g class="rot" style="transform-origin: 1000px 420px"><circle cx="1000" cy="420" r="350" fill="none" stroke="#1A1010" stroke-width="4" stroke-dasharray="2 22" stroke-linecap="round"/></g>
      <path d="M40 860 V 730 A 140 140 0 0 1 320 730 V 860 Z" fill="#1A1010"/>
      <path class="flow" d="M380 800 C 440 740, 500 860, 560 800 S 680 740, 740 800 S 860 860, 920 800" fill="none" stroke="#FFE8D6" stroke-width="18" stroke-linecap="round" stroke-dasharray="60 40"/>
      <rect class="bobr" x="1170" y="110" width="44" height="44" rx="10" fill="#1A1010"/>
      <path class="spinf" d="M700 120 L 734 182 L 666 182 Z" fill="#1A1010"/>
      <circle class="bobr" cx="620" cy="560" r="14" fill="#FFE8D6" style="animation-delay: -2s"/>
    </svg>
    <div class="shot-wrap hide-sm"><div class="tilt shot">[App 2 screenshot]</div></div>`,
  cardArt: `
    <svg viewBox="0 0 142 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="142" height="100" fill="#FFE8D6"/>
      <circle cx="100" cy="46" r="32" fill="#FF6B4A"/>
      <path d="M10 100 V 74 A 22 22 0 0 1 54 74 V 100 Z" fill="#1A1010"/>
    </svg>`,
});

const app3 = placeholderApp({
  id: 'app-3',
  number: '03',
  name: '[App 3]',
  status: 'Idea',
  theme: { bg: '#2F5BFF', ink: '#FFFFFF', header: 'rgba(47, 91, 255, 0.9)' },
  details: { bg: '#1A2FA8', ink: '#FFFFFF', card: '#2F5BFF', cardInk: '#FFFFFF' },
  scene: `
    <svg class="scene-fill" viewBox="0 0 1280 860" preserveAspectRatio="xMidYMid slice">
      <circle class="tw" cx="120" cy="90" r="2.5" fill="#FFFFFF"/>
      <circle class="tw" cx="420" cy="60" r="2" fill="#FFFFFF" style="animation-delay: -1s"/>
      <circle class="tw" cx="640" cy="180" r="3" fill="#FFFFFF" style="animation-delay: -2s"/>
      <circle class="tw" cx="80" cy="640" r="2" fill="#FFFFFF" style="animation-delay: -0.5s"/>
      <circle class="tw" cx="560" cy="760" r="2.5" fill="#FFFFFF" style="animation-delay: -1.5s"/>
      <circle class="tw" cx="1220" cy="780" r="2" fill="#FFFFFF" style="animation-delay: -2.5s"/>
      <circle class="tw" cx="1240" cy="60" r="3" fill="#FFFFFF" style="animation-delay: -0.8s"/>
      <circle class="tw" cx="760" cy="640" r="2" fill="#FFFFFF" style="animation-delay: -1.8s"/>
      <circle cx="1000" cy="430" r="190" fill="none" stroke="#FFFFFF" stroke-opacity="0.35" stroke-width="2" stroke-dasharray="6 10"/>
      <circle cx="1000" cy="430" r="300" fill="none" stroke="#FFFFFF" stroke-opacity="0.22" stroke-width="2" stroke-dasharray="6 10"/>
      <circle class="halo2" cx="1000" cy="430" r="84" fill="none" stroke="#FFC53D" stroke-width="3"/>
      <circle cx="1000" cy="430" r="78" fill="#FFC53D"/>
      <g class="orb" style="transform-origin: 1000px 430px; animation-duration: 14s"><circle cx="1190" cy="430" r="20" fill="#FF8FC7"/></g>
      <g class="orb" style="transform-origin: 1000px 430px; animation-duration: 28s; animation-direction: reverse">
        <circle cx="1000" cy="130" r="30" fill="#2ED3A0"/>
        <g class="orb" style="transform-origin: 1000px 130px; animation-duration: 5s"><circle cx="1050" cy="130" r="7" fill="#FFFFFF"/></g>
      </g>
    </svg>`,
  cardArt: `
    <svg viewBox="0 0 142 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="142" height="100" fill="#1A2FA8"/>
      <circle cx="71" cy="50" r="30" fill="none" stroke="#FFFFFF" stroke-opacity="0.45" stroke-width="1.5" stroke-dasharray="3 4"/>
      <circle cx="71" cy="50" r="14" fill="#FFC53D"/>
      <circle cx="101" cy="50" r="5" fill="#FF8FC7"/>
    </svg>`,
});

const app4 = placeholderApp({
  id: 'app-4',
  number: '04',
  name: '[App 4]',
  status: 'Idea',
  theme: { bg: '#FF8FC7', ink: '#1A1033', header: 'rgba(255, 143, 199, 0.9)' },
  details: { bg: '#FFE3F1', ink: '#1A1033', card: '#FFFFFF', cardInk: '#1A1033' },
  scene: `
    <span class="blob" style="position: absolute; right: 5%; top: 14%; width: 460px; height: 460px; background: #B9A5FF"></span>
    <span class="blob" style="position: absolute; right: 26%; top: 52%; width: 220px; height: 220px; background: #FFF3F8; animation-duration: 7s; animation-direction: reverse"></span>
    <svg class="spinf hide-sm" viewBox="0 0 24 24" style="position: absolute; right: 8%; top: 12%; width: 150px; height: 150px"><path d="M12 0 L14.6 8.4 L23.4 7.6 L16.2 12.6 L20 20.6 L12 16.2 L4 20.6 L7.8 12.6 L0.6 7.6 L9.4 8.4 Z" fill="#1A1033"/></svg>
    <span class="bounce hide-sm" style="position: absolute; right: 40%; bottom: 10%; width: 46px; height: 46px; border-radius: 50%; background: #1A1033"></span>
    <svg class="scene-fill" viewBox="0 0 1280 860" preserveAspectRatio="xMidYMid slice">
      <path class="flow" d="M60 790 L 120 740 L 180 790 L 240 740 L 300 790 L 360 740 L 420 790" fill="none" stroke="#1A1033" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="40 24"/>
    </svg>`,
  cardArt: `
    <svg viewBox="0 0 142 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="142" height="100" fill="#FFF3F8"/>
      <path d="M40 20 C 70 6, 110 24, 104 56 C 98 86, 56 92, 36 70 C 20 52, 18 30, 40 20 Z" fill="#B9A5FF"/>
      <path d="M112 14 L115 23 L124 22 L117 28 L120 37 L112 32 L104 37 L107 28 L100 22 L109 23 Z" fill="#1A1033"/>
    </svg>`,
});

export const demoApps = [app2, app3, app4];
