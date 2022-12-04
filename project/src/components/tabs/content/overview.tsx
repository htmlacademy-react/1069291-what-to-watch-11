import React from 'react';
import { FilmType } from '../../../types/films';

type OverviewProps = {
  film: FilmType;
}

function Overview({ film }: OverviewProps): JSX.Element {
  const status = () => {
    if (film.rating < 2) {
      return 'Very bad';
    } else if (film.rating < 4) {
      return 'Bad';
    } else if (film.rating < 6) {
      return 'Good';
    } else if (film.rating < 8) {
      return 'Very Good';
    } else if (film.rating <= 10) {
      return 'Delightful';
    }

    return 'Unknown';
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{String(film.rating).replace('.', ',')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ status() }</span>
          <span className="film-rating__count">{ film.reviews.length } ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        { film.description.map((text) => <p key={ text }>{ text }</p>) }
        <p className="film-card__director"><strong>Director: { film.director }</strong></p>
        <p className="film-card__starring"><strong>Starring: { film.starring.join(', ') }</strong></p>
      </div>
    </>
  );
}

export default Overview;
