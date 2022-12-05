import React from 'react';
import { Months } from '../../consts';
import { ReviewType } from '../../types/films';


type ReviewProps = {
  review: ReviewType;
}

function Review({ review }: ReviewProps): JSX.Element {
  const date = new Date(review.date);
  const formatedDate = `${Months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime="2016-12-24">{formatedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{String(review.grade).replace('.', ',')}</div>
    </div>
  );
}

export default Review;
