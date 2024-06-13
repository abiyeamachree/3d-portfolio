import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container!); // Use the non-null assertion operator (!) since we're sure the element exists

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);