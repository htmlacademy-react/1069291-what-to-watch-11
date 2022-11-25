import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App name="The Grand Budapest Hotel" genre="Drama" releaseYear="2014" />
  </React.StrictMode>,
);
