import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import { genres } from './mocks/genres';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App films={films} genres={genres} />
    </BrowserRouter>
  </React.StrictMode>,
);
