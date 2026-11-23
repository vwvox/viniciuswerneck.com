import mirna from './apps/mirna.js';
// Placeholder apps live in ./apps/demo-apps.js. To preview several apps together,
// import { demoApps } from there and add ...demoApps to the list below.

export const site = {
  // Shown in the top bar and the browser tab. Domain: viniciuswerneck.com
  name: 'Vinicius Werneck',
  // The name in the About block ("Hi, I'm …").
  aboutName: 'Vinicius',
  // About text, one string per paragraph. Simple HTML (links) is allowed.
  about: [
    'Making apps is my hobby. I build them in my spare time, mostly for myself. Mirna is the first one I’m sharing publicly.',
    'It’s open source and builds on <a href="https://github.com/fastrepl/anarlog">Anarlog</a>, so it exists thanks to people who shared their work first. Mine is here in the same spirit: use it, change it, learn from it.',
  ],
  // Small print under the About text.
  note: 'Visits are counted with <a href="https://www.goatcounter.com">GoatCounter</a>: no cookies, nothing that identifies you.',
  // Forwarded to a personal inbox through Namecheap's email forwarding.
  email: 'hi@viniciuswerneck.com',
  // Apps without their own repo link point here instead.
  githubProfile: 'https://github.com/vwvox',
};

// The order here is the order of the cards in the corner fan.
// The fan only appears once there are at least two apps.
export const apps = [mirna];
