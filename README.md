# Vinicius Werneck · Apps

A one-page site for my apps, to live at viniciuswerneck.com. Each app gets the whole screen in its own colours and motion. A stack of cards in the bottom-right corner switches between apps, and "Know more" opens each app's details below.

## Run it locally

The scripts are ES modules, so serve the folder rather than opening `index.html` directly:

```bash
cd "/Users/vw/Documents/Claude Code/Portfolio"
python3 -m http.server 4321
```

Then open http://localhost:4321.

## How it's put together

| File | What it holds |
|---|---|
| `index.html` | Page shell: top bar, hero, corner fan, details area, About |
| `css/styles.css` | All styles and animations |
| `js/content.js` | Site settings (name, email, GitHub) and the list of apps, in fan order |
| `js/apps/mirna.js` | Mirna: colours, scene, hero, details and card art |
| `js/apps/demo-apps.js` | Three placeholder apps that show several apps together |
| `js/main.js` | Behaviour: switching, fan, Know more, scroll lock, links to each app |
| `js/icons.js` | Small inline icons |

## How it behaves

- The page doesn't scroll until you press **Know more**. Trying to scroll before that nudges the button.
- Hover the corner stack (or tap it on a phone) to fan out the apps. Pick one and the colours fade over to it.
- Each app has its own link, such as `/#mirna` or `/#app-2`.
- **Back to top** returns to the full-screen view and locks scrolling again.
- Keyboard: the corner stack is a button, the cards are buttons, and Escape closes the fan.
- Respects the reduced-motion setting.

## Adding an app

1. Copy `js/apps/mirna.js` to `js/apps/<id>.js`. Change `id`, `number`, `name`, `line`, `theme` colours, `scene`, `cardArt`, `hero` and `details`.
2. Import it in `js/content.js` and add it to `apps` where it should sit in the fan.

## Before launch

- [x] Name: Vinicius Werneck (`site.name` in `js/content.js`, `<title>` in `index.html`)
- [ ] Domain: register viniciuswerneck.com (it was free on 2026-11-22), then point it at the host
- [x] About text, email (hi@viniciuswerneck.com) and GitHub profile in `js/content.js`
- [ ] Email forwarding: add `hi` → your inbox in Namecheap (Domain List → Manage → Redirect Email)
- [ ] Make github.com/vwvox/mirna public, so Mirna's GitHub buttons work for visitors
- [x] Placeholder apps left off the live site (they stay in `js/apps/demo-apps.js` for previews)
- [ ] Favicon (`favicon.svg` is a stand-in)
- [ ] Optional: self-host the fonts instead of loading them from Google Fonts
- [ ] Optional: a social preview image and meta tags

## Hosting

Plain static files with no build step, served by GitHub Pages from the repo's `main` branch.

- `CNAME` tells GitHub Pages the custom domain (viniciuswerneck.com).
- `.nojekyll` makes GitHub serve the files as they are.
- DNS lives in Namecheap: the bare domain has A and AAAA records to GitHub Pages, and `www` is a CNAME to `vwvox.github.io`.
- To update the site, commit and push to `main`. GitHub republishes it in a minute or two.
