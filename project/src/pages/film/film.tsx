import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Catalog from '../../components/catalog/catalog';
import FilmCardDesc from '../../components/film-card/partials/film-card-desc/film-card-desc';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Spinner from '../../components/spinner/spinner';
import Tabs from '../../components/tabs/tabs';
import { AuthorizationStatus } from '../../consts';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { clearFilmInfo, clearSimilar } from '../../store/action';
import { fetchFilmInfoAction, fetchSimilarAction } from '../../store/api-actions';

function Film(): JSX.Element {
  const film = useAppSelector((state) => state.filmInfo);
  const similar = useAppSelector((state) => state.similar);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmInfoAction(Number(id)));
    dispatch(fetchSimilarAction(Number(id)));

    return () => {
      dispatch(clearFilmInfo());
      dispatch(clearSimilar());
    };
  }, [dispatch, id]);

  if (!film) {return <Spinner />;}

  return (
    <>
      <section className="film-card film-card--full" style={{ background: film.backgroundColor }}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="film-card__head" userBlock />

          <div className="film-card__wrap">
            <FilmCardDesc film={film}>
              {authorizationStatus === AuthorizationStatus.Auth && <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>}
            </FilmCardDesc>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs film={film} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {similar.length && <Catalog className="catalog--like-this" filteredfilms={similar} title="More like this" />}
        <Footer />
      </div>
    </>
  );
}

export default Film;
