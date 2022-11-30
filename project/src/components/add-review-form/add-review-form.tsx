import React, { useState } from 'react';
import useTextarea from '../../hooks/useTextarea';
import Star from '../star/star';

function AddReviewForm(): JSX.Element {
  const [rating, setRating] = useState<number>(8);

  const reviewTextArea = useTextarea('');

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            { [...Array(10).keys()].reverse().map((item) => <Star key={item} index={item + 1} checked={rating === item + 1} handleChange={setRating} />) }
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            {...reviewTextArea}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
