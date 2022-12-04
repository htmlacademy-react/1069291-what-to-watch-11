import React from 'react';
import { FilmType } from '../../../types/films';
import Review from '../../review/review';

type ReviewsProps = {
  film: FilmType;
}

function Reviews({ film }: ReviewsProps): JSX.Element {
  const leftColumnElements = film.reviews.slice(0, Math.ceil((film.reviews.length) / 2));
  const rightColumnElements = film.reviews.slice(Math.ceil((film.reviews.length) / 2), film.reviews.length);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {leftColumnElements.map((review) => <Review key={review.id} review={review} />)}
      </div>
      <div className="film-card__reviews-col">
        {rightColumnElements.map((review) => <Review key={review.id} review={review} />)}
      </div>
    </div>
  );
}

export default Reviews;
