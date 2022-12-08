import React from 'react';
import { Months } from '../../consts';
import { Comment } from '../../types/comments';


type ReviewProps = {
  review: Comment;
}

function Review({ review }: ReviewProps): JSX.Element {
  const date = new Date(review.date);
  const formatedDate = `${Months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{formatedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{String(review.rating).replace('.', ',')}</div>
    </div>
  );
}

export default Review;
