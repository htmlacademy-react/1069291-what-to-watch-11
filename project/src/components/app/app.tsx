import React from 'react';
import Main from '../../pages/main/main';

type AppProps = {
  name: string;
  genre: string;
  releaseYear: string;
}

function App({ name, genre, releaseYear }: AppProps): JSX.Element {
  return <Main name={name} genre={genre} releaseYear={releaseYear} />;
}

export default App;
