// Mirna: meeting notes on your Mac.
// Brand: Serra #2E4A3B, Sage #A9B8A3, Terra #B4532F, Ipê #E3B23C, Mist #F5F3EC,
// Paper #FBFAF6, Moss #DCE3D6, Soapstone #2F3431. Fraunces headings, Figtree text.
// Rule: the forest app icon and the wordmark never appear together. This page uses the wordmark only.

const wordmark = `<span aria-hidden="true">m<span class="idot">ı<span></span></span>rna</span><span class="visually-hidden">Mirna</span>`;

const scene = `
<svg class="scene-fill" viewBox="0 0 1280 860" preserveAspectRatio="xMidYMax slice">
  <defs>
    <filter id="mist-mirna" x="-20%" y="-300%" width="140%" height="700%"><feGaussianBlur stdDeviation="14"/></filter>
  </defs>
  <g class="sunbob">
    <circle class="halo" cx="1110" cy="112" r="70" fill="none" stroke="#E3B23C" stroke-width="3"/>
    <circle cx="1110" cy="112" r="62" fill="#E3B23C"/>
  </g>
  <g class="pan" style="animation-duration: 150s">
    <path d="M0 630 C 127 630, 253 560, 380 560 C 507 560, 633 615, 760 615 C 857 615, 953 575, 1050 575 C 1127 575, 1203 630, 1280 630 C 1407 630, 1533 560, 1660 560 C 1787 560, 1913 615, 2040 615 C 2137 615, 2233 575, 2330 575 C 2407 575, 2483 630, 2560 630 L 2560 860 L 0 860 Z" fill="#DCE3D6"/>
  </g>
  <g filter="url(#mist-mirna)" opacity="0.85"><ellipse class="mistband" cx="640" cy="652" rx="560" ry="26" fill="#FFFFFF"/></g>
  <g class="pan" style="animation-duration: 95s">
    <path d="M0 700 C 100 700, 200 735, 300 735 C 413 735, 527 670, 640 670 C 753 670, 867 725, 980 725 C 1080 725, 1180 700, 1280 700 C 1380 700, 1480 735, 1580 735 C 1693 735, 1807 670, 1920 670 C 2033 670, 2147 725, 2260 725 C 2360 725, 2460 700, 2560 700 L 2560 860 L 0 860 Z" fill="#A9B8A3"/>
    <path d="M640 672 V 650 M1920 672 V 650 M220 728 V 712 M1500 728 V 712" stroke="#6B4A2E" stroke-width="3"/>
    <circle cx="640" cy="640" r="15" fill="#E3B23C"/><circle cx="628" cy="647" r="10" fill="#E3B23C"/><circle cx="652" cy="647" r="10" fill="#E3B23C"/><circle cx="636" cy="635" r="6" fill="#F2CC63"/>
    <circle cx="1920" cy="640" r="15" fill="#E3B23C"/><circle cx="1908" cy="647" r="10" fill="#E3B23C"/><circle cx="1932" cy="647" r="10" fill="#E3B23C"/><circle cx="1916" cy="635" r="6" fill="#F2CC63"/>
    <circle cx="220" cy="704" r="10" fill="#E3B23C"/><circle cx="1500" cy="704" r="10" fill="#E3B23C"/>
  </g>
  <g filter="url(#mist-mirna)" opacity="0.7"><ellipse class="mistband" cx="360" cy="742" rx="420" ry="20" fill="#FFFFFF" style="animation-delay: -7s"/></g>
  <g class="pan" style="animation-duration: 62s">
    <path d="M0 790 C 120 790, 240 760, 360 760 C 480 760, 600 808, 720 808 C 820 808, 920 772, 1020 772 C 1107 772, 1193 790, 1280 790 C 1400 790, 1520 760, 1640 760 C 1760 760, 1880 808, 2000 808 C 2100 808, 2200 772, 2300 772 C 2387 772, 2473 790, 2560 790 L 2560 860 L 0 860 Z" fill="#2E4A3B"/>
    <path d="M560 860 C 600 836, 660 818, 730 808 M1840 860 C 1880 836, 1940 818, 2010 808" fill="none" stroke="#B4532F" stroke-width="4" stroke-linecap="round"/>
  </g>
  <ellipse class="petal" cx="1180" cy="40" rx="6" ry="3.5" fill="#E3B23C"/>
  <ellipse class="petal" cx="1260" cy="120" rx="5" ry="3" fill="#F2CC63" style="animation-delay: -2s"/>
  <ellipse class="petal" cx="1020" cy="10" rx="6" ry="3.5" fill="#E3B23C" style="animation-delay: -4s"/>
  <ellipse class="petal" cx="1300" cy="260" rx="5" ry="3" fill="#E3B23C" style="animation-delay: -6s"/>
  <ellipse class="petal" cx="900" cy="-20" rx="5" ry="3" fill="#F2CC63" style="animation-delay: -8s"/>
</svg>`;

const cardArt = `
<svg viewBox="0 0 142 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <rect width="142" height="100" fill="#E7E4D8"/>
  <circle cx="108" cy="30" r="13" fill="#E3B23C"/>
  <path d="M0 62 C 24 50, 48 46, 72 54 S 120 44, 142 50 L142 100 L0 100 Z" fill="#DCE3D6"/>
  <path d="M0 76 C 28 66, 56 64, 84 72 S 128 64, 142 68 L142 100 L0 100 Z" fill="#A9B8A3"/>
  <path d="M0 90 C 34 82, 66 80, 98 88 S 132 84, 142 86 L142 100 L0 100 Z" fill="#2E4A3B"/>
</svg>`;

const waveBars = ['-0.1', '-0.5', '-0.3', '-0.8', '-0.2', '-0.6', '-0.9', '-0.4', '-0.7', '-0.15']
  .map((d) => `<span style="animation-delay: ${d}s"></span>`).join('');

export default {
  id: 'mirna',
  number: '01',
  name: 'Mirna',
  line: 'Meeting notes on your Mac',
  theme: { bg: '#F5F3EC', ink: '#2E4A3B', header: 'rgba(245, 243, 236, 0.9)' },
  nameFont: 'var(--font-serif)',
  // Works for visitors once the repo is public.
  github: 'https://github.com/vwvox/mirna',
  // Download buttons show only while this is set.
  download: { url: 'https://github.com/vwvox/mirna/releases/latest/download/Mirna-mac-arm64.dmg', note: 'Beta · Apple Silicon · macOS 15 or later' },
  scene,
  cardArt,

  hero: ({ icons, github, download }) => `
    <div class="hero-copy mirna-copy">
      <span class="eyebrow s s1">No. 01 · Meeting notes</span>
      <h1 class="mirna-wordmark s s2">${wordmark}</h1>
      <div class="mistline s s2" aria-hidden="true"><span></span><span></span><span></span></div>
      <p class="mirna-tagline s s3">Every conversation, remembered.</p>
      <p class="hero-sub s s4">Mirna listens to meetings, calls and voice notes, then writes clear notes, all on your own Mac.</p>
      <ul class="hero-chips s s4" aria-label="Highlights">
        <li>No meeting bot</li>
        <li>Runs on your Mac</li>
        <li>No account</li>
        <li>Open source</li>
      </ul>
      <div class="hero-actions s s5">
        ${download ? `<a class="btn btn-solid" href="${download.url}" data-track="download-mirna-mac/hero">${icons.download} Download for Mac</a>` : ''}
        <button type="button" class="btn ${download ? 'btn-outline' : 'btn-solid'}" data-action="more">Know more ${icons.arrowDown}</button>
        <a class="btn btn-outline" href="${github}">${icons.code} GitHub</a>
      </div>
      ${download ? `<p class="hero-note s s5">${download.note}</p>` : ''}
    </div>
    <div class="mirna-demo s s5 hide-sm" aria-hidden="true">
      <div class="float demo-card">
        <div class="demo-head">
          <span class="demo-label">Listening</span>
          <span class="wave">${waveBars}</span>
          <span class="demo-time">12:48</span>
        </div>
        <p class="demo-line l1"><b>Ana</b> So the launch moves to March?</p>
        <p class="demo-line l2"><b>Rui</b> Yes, once the Android build is ready.</p>
        <p class="demo-line l3"><b>Ana</b> Then I'll update the roadmap today.</p>
        <div class="demo-notes">
          <div class="demo-notes-head">
            <span class="demo-label">${icons.sparkle} Notes</span>
            <span class="demo-writing n0">Writing…</span>
          </div>
          <div class="demo-note n1"><span class="dot"></span>Launch moves to March</div>
          <div class="demo-note n2"><span class="dot"></span>Depends on the Android build</div>
          <div class="demo-note n3"><span class="box"></span>Ana updates the roadmap</div>
        </div>
      </div>
    </div>`,

  details: ({ icons, github, download }) => `
    <div class="section details-mirna">
      <div class="wrap stack">
        <div class="intro">
          <span class="eyebrow">Mirna · calm notes, kept close</span>
          <h2 class="m-h2">Notes from every conversation, without giving them away.</h2>
          <p class="d-lead">Mirna records a conversation, turns it into a transcript on your Mac and writes structured notes: a summary, the decisions and the next steps. Then you can ask it questions about the meeting. You decide what, if anything, ever touches the cloud.</p>
        </div>

        <div class="m-block">
          <h3 class="m-h3">What it does</h3>
          <div class="grid grid-4">
            <article class="feature m-feature">
              ${icons.chats}
              <h3>Records any conversation</h3>
              <p>It captures your microphone and your Mac's own audio, so Zoom, Meet, Teams, WhatsApp or a chat across the table all work the same way.</p>
            </article>
            <article class="feature m-feature">
              ${icons.wave}
              <h3>Transcribes on your Mac</h3>
              <p>Speech becomes text on the device, using Whisper. No upload, no waiting on a server.</p>
            </article>
            <article class="feature m-feature">
              ${icons.notes}
              <h3>Writes the notes with you</h3>
              <p>Jot a few rough notes during the call. Mirna combines them with the transcript into clear, structured notes.</p>
            </article>
            <article class="feature m-feature">
              ${icons.ask}
              <h3>Answers questions</h3>
              <p>Ask what was decided, who owns what, or what you missed, and get answers from that meeting.</p>
            </article>
          </div>
        </div>

        <div class="m-block">
          <h3 class="m-h3">What makes it different</h3>
          <div class="grid grid-3">
            <article class="feature m-diff">
              ${icons.noBot}
              <h3>No bot joins your call</h3>
              <p>Nobody sees a recorder appear in the participant list. Mirna listens through your own Mac, like your ears do.</p>
            </article>
            <article class="feature m-diff">
              ${icons.lock}
              <h3>Nothing leaves your Mac</h3>
              <p>Audio, transcripts and notes stay on your computer by default. A local model writes the notes through Ollama, LM Studio or Apple Intelligence.</p>
            </article>
            <article class="feature m-diff">
              ${icons.user}
              <h3>No account, no tracking</h3>
              <p>No sign-up, no analytics, no crash reports and no update checks. Open it and start recording.</p>
            </article>
            <article class="feature m-diff">
              ${icons.shield}
              <h3>A locked-down network</h3>
              <p>The app can only reach your own machine, your local network and AI providers you connect yourself. Everything else is refused.</p>
            </article>
            <article class="feature m-diff">
              ${icons.sliders}
              <h3>Your choice of AI</h3>
              <p>Use a free local model, or any cloud provider with your own API key. There's no subscription and no middleman.</p>
            </article>
            <article class="feature m-diff">
              ${icons.code}
              <h3>Open source</h3>
              <p>MIT-licensed and public on GitHub, so anyone can check what it does with your conversations.</p>
            </article>
          </div>
        </div>

        <div class="m-options">
          <div class="intro">
            <h3 class="m-h3">Local by default, cloud only if you choose</h3>
            <p class="d-lead">Pick where transcripts are made and where notes are written. Today it's one setting for every meeting; a per-meeting switch is next.</p>
          </div>
          <div class="grid grid-3">
            <article class="m-option opt-local">
              <span class="tag tag-gold">Default</span>
              <h4>Everything on your Mac</h4>
              <p>Audio, transcript and notes never leave your Mac.</p>
              <div class="m-rows">
                <span><span>Transcribed on</span><b>Your Mac</b></span>
                <span><span>Notes written on</span><b>Your Mac</b></span>
              </div>
            </article>
            <article class="m-option opt-notes">
              <span class="tag tag-serra">Option</span>
              <h4>Cloud notes</h4>
              <p>The transcript text goes to the AI provider you pick to write the notes. The audio stays on your Mac.</p>
              <div class="m-rows">
                <span><span>Transcribed on</span><b>Your Mac</b></span>
                <span><span>Notes written by</span><b>Your AI provider</b></span>
              </div>
            </article>
            <article class="m-option opt-stt">
              <span class="tag tag-serra">Option</span>
              <h4>Cloud transcription</h4>
              <p>The audio goes to the speech service you pick to make the transcript.</p>
              <div class="m-rows">
                <span><span>Transcribed by</span><b>Your speech service</b></span>
                <span><span>Notes written on</span><b>Your choice</b></span>
              </div>
            </article>
          </div>
        </div>

        <div class="intro">
          <h3 class="m-h3">Where it's at</h3>
          <p class="d-lead">${download
            ? 'A public beta for Apple Silicon Macs. It works end to end, with rough edges. The first time you open it, macOS asks you to allow it in System Settings › Privacy & Security, because it isn\'t registered with Apple yet.'
            : 'An early prototype for Apple Silicon Macs. It works end to end, with rough edges.'}</p>
          <div class="pills">
            <span class="pill pill-done">Records, transcribes and writes notes · working</span>
            <span class="pill pill-done">Cloud-free by default · mostly done</span>
            <span class="pill pill-next">Per-meeting cloud switch · next</span>
            <span class="pill pill-later">Android companion · planned</span>
            <span class="pill pill-later">Phone and Mac sync · planned</span>
            <span class="pill pill-later">Portuguese, voice notes, speaker names · later</span>
          </div>
        </div>

        <div class="d-actions">
          ${download ? `<a class="btn btn-serra" href="${download.url}" data-track="download-mirna-mac/details">${icons.download} Download the beta for Mac</a>` : ''}
          <a class="btn ${download ? 'btn-outline' : 'btn-serra'}" href="${github}">${icons.code} ${download ? 'Source on GitHub' : 'Build it from source on GitHub'}</a>
          <button type="button" class="btn btn-outline" data-action="top">Back to top</button>
        </div>
      </div>
    </div>`,
};
