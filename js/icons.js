// Small stroke icons, drawn inline so they follow the text colour.
const svg = (body, extra = '') => `<svg class="icon${extra}" viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;

export const icons = {
  arrowDown: svg('<path d="M12 5v14M6 13l6 6 6-6"/>', ' icon-arrow-down'),
  arrowRight: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  download: svg('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>'),
  code: svg('<path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16"/>'),
  sparkle: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 14 10 22 12 14 14 12 22 10 14 2 12 10 10Z"/></svg>`,
  chats: svg('<path d="M4 5h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/><path d="M18 9h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3.5-3H12"/>'),
  notes: svg('<path d="M12 3l1.6 6 5.9 1.5-5.9 1.5L12 18l-1.6-6-5.9-1.5 5.9-1.5Z"/><path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z"/>'),
  lock: svg('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
  wave: svg('<path d="M3 12h2M7 8v8M11 5v14M15 9v6M19 7v10M21 12h0"/>'),
  ask: svg('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12Z"/><path d="M9.8 9.6a2.3 2.3 0 0 1 4.4.9c0 1.5-2.2 2-2.2 3.2M12 16.4h.01"/>'),
  noBot: svg('<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 8V5M9.5 13h.01M14.5 13h.01M3 3l18 18"/>'),
  user: svg('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/>'),
  shield: svg('<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6Z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'),
  sliders: svg('<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>'),
  devices: svg('<rect x="2" y="5" width="7" height="14" rx="1.5"/><rect x="12" y="6" width="10" height="8" rx="1"/><path d="M10.5 18H23"/>'),
};
