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
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className="film-card__head" userBlock />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <FilmCardDesc film={film} />
        </div>
      </div>
    </section>
  );
}

export default FilmCard;
