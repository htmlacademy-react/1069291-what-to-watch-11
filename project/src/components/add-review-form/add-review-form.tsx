import React, { FormEvent, useState } from 'react';
import Star from '../star/star';

function AddReviewForm(): JSX.Element {
  const [rating, setRating] = useState<number>(8);
  const [review, setReview] = useState<string>('');

  const handleInputReview = (e: FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setReview(target.value);
  };

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
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={review}
            onInput={handleInputReview}
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
