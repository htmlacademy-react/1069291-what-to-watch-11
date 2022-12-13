import React from 'react';
import { FilmType } from '../../types/films';
import Header from '../header/header';
import FilmCardDesc from './partials/film-card-desc/film-card-desc';

type FilmCardProps = {
  film: FilmType;
}


function FilmCard({ film }: FilmCardProps): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className="film-card__head" userBlock />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>

          <FilmCardDesc film={film} />
        </div>
      </div>
    </section>
  );
}

export default FilmCard;
