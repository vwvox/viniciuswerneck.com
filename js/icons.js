// Small stroke icons, drawn inline so they follow the text colour.
const svg = (body, extra = '') => `<svg class="icon${extra}" viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;

export const icons = {
  arrowDown: svg('<path d="M12 5v14M6 13l6 6 6-6"/>', ' icon-arrow-down'),
  arrowRight: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  code: svg('<path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16"/>'),
  sparkle: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 14 10 22 12 14 14 12 22 10 14 2 12 10 10Z"/></svg>`,
  chats: svg('<path d="M4 5h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/><path d="M18 9h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3.5-3H12"/>'),
  notes: svg('<path d="M12 3l1.6 6 5.9 1.5-5.9 1.5L12 18l-1.6-6-5.9-1.5 5.9-1.5Z"/><path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z"/>'),
  lock: svg('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
  devices: svg('<rect x="2" y="5" width="7" height="14" rx="1.5"/><rect x="12" y="6" width="10" height="8" rx="1"/><path d="M10.5 18H23"/>'),
};
