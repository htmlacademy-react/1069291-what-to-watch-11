import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute, AuthorizationStatus } from '../../consts';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import { useAppSelector } from '../../hooks/useAppSelector';
import Spinner from '../../components/spinner/spinner';

function AddReview(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const { id } = useParams();

  const film = films.find((el) => el.id === Number(id));

  if (authorizationStatus !== AuthorizationStatus.Auth) {return <Navigate to={AppRoute.SignIn} />;}
  if (!film) {return <Spinner />;}

  return (
    <section className="film-card film-card--full" style={{ background: film.backgroundColor }}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header breadcrumbs film={film} />

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm film={film} />
    </section>
  );
}

export default AddReview;
