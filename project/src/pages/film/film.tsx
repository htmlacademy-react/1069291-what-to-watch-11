import React, { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Catalog from '../../components/catalog/catalog';
import FilmCardDesc from '../../components/film-card/partials/film-card-desc/film-card-desc';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute } from '../../consts';
import { moreLike } from '../../mocks/more-like';
import { FilmType } from '../../types/films';

type FilmProps = {
  films: FilmType[];
}

function Film({ films }: FilmProps): JSX.Element {
  const { id } = useParams();

  const currentFilm = useMemo(() => films.find((film) => film.id === Number(id)), [films, id]);
  const description = useMemo(() => currentFilm?.description as string[], [currentFilm]);

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
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                { description?.map((text) => <p key={text}>{text}</p>) }
                <p className="film-card__director"><strong>Director: { currentFilm.director }</strong></p>
                <p className="film-card__starring"><strong>Starring: { currentFilm.starring.join(', ') }</strong></p>
              </div>
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
