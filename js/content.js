import mirna from './apps/mirna.js';
// Placeholder apps live in ./apps/demo-apps.js. To preview several apps together,
// import { demoApps } from there and add ...demoApps to the list below.

export const site = {
  // Shown in the top bar and the browser tab. Domain: viniciuswerneck.com
  name: 'Vinicius Werneck',
  // TODO: the name in the About block ("Hi, I'm …"). Placeholder for now.
  aboutName: '[your name]',
  about: 'I make apps for everyday things, one at a time, each with its own personality.',
  // TODO: contact email. While empty, the About block shows a placeholder.
  email: '',
  // TODO: your GitHub profile, e.g. https://github.com/<you>.
  // Apps without their own repo link point here instead.
  githubProfile: '',
};

// The order here is the order of the cards in the corner fan.
// The fan only appears once there are at least two apps.
export const apps = [mirna];
