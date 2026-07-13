import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Self-hosted fonts (previously only Cinzel was loaded, from Google Fonts).
// Latin subsets only — the site's text is entirely latin.
import '@fontsource/cinzel/latin-500.css';
import '@fontsource/raleway/latin-400.css';
import '@fontsource/raleway/latin-600.css';
import '@fontsource/nanum-myeongjo/latin-700.css';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
