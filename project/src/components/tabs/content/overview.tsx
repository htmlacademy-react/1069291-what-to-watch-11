import React, { useEffect, useState } from 'react';
import { RatingStatus } from '../../../consts';
import { FilmType } from '../../../types/films';

type OverviewProps = {
  film: FilmType;
}

function Overview({ film }: OverviewProps): JSX.Element {
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    if (film.rating < 3) {
      setStatus(RatingStatus.Bad);
    } else if (film.rating < 5) {
      setStatus(RatingStatus.Normal);
    } else if (film.rating < 8) {
      setStatus(RatingStatus.Good);
    } else if (film.rating < 10) {
      setStatus(RatingStatus.VeryGood);
    } else if (film.rating === 10) {
      setStatus(RatingStatus.Awesome);
    }
  }, [film.rating]);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{String(film.rating).replace('.', ',')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ status }</span>
          <span className="film-rating__count">{ film.scoresCount } ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{ film.description }</p>
        <p className="film-card__director"><strong>Director: { film.director }</strong></p>
        <p className="film-card__starring"><strong>Starring: { film.starring.join(', ') }</strong></p>
      </div>
    </>
  );
}

export default Overview;
