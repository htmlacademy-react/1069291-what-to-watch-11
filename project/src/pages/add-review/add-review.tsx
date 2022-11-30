import React from 'react';
import { FilmType } from '../../types/films';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute } from '../../consts';
import AddReviewForm from '../../components/add-review-form/add-review-form';

type AddReviewProps = {
  films: FilmType[];
}

function AddReview({ films }: AddReviewProps): JSX.Element {
  const { id } = useParams();

  const currentFilm = films.find((film) => film.id === Number(id));

  if (!currentFilm) {return <Navigate to={AppRoute.Main} />;}

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.preview} alt={currentFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header breadcrumbs film={currentFilm} />

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm?.preview} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReview;
