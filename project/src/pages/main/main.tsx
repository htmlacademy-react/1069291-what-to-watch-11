import React from 'react';
import Catalog from '../../components/catalog/catalog';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import { FilmType } from '../../types/films';
import { GenreType } from '../../types/genres';

type MainProps = {
  films: FilmType[];
  genres: GenreType[];
}

function Main({ films, genres }: MainProps): JSX.Element {
  return (
    <div>
      <FilmCard film={films[0]} />

      <div className="page-content">
        <Catalog films={films} genres={genres} maxCount={4} />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
