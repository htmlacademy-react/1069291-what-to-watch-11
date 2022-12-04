import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Catalog from '../../components/catalog/catalog';
import FilmCardDesc from '../../components/film-card/partials/film-card-desc/film-card-desc';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import { AppRoute } from '../../consts';
import { moreLike } from '../../mocks/more-like';
import { FilmType } from '../../types/films';

type FilmProps = {
  films: FilmType[];
}

function Film({ films }: FilmProps): JSX.Element {
  const { id } = useParams();

  const currentFilm = films.find((film) => film.id === Number(id));

  if (!currentFilm) {return <Navigate to={AppRoute.Main} />;}

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="film-card__head" userBlock />

          <div className="film-card__wrap">
            <FilmCardDesc film={currentFilm}>
              <Link to={`/films/${currentFilm.id}/review`} className="btn film-card__button">Add review</Link>
            </FilmCardDesc>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.preview} alt={currentFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs film={currentFilm} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog className="catalog--like-this" films={moreLike} title="More like this" />
        <Footer />
      </div>
    </>
  );
}

export default Film;
