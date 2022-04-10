import React from 'react';
import { App } from './App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
