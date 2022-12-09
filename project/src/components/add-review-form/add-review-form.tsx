import React, { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import useTextarea from '../../hooks/useTextarea';
import { addCommentsAction } from '../../store/api-actions';
import { FilmType } from '../../types/films';
import Star from '../star/star';

type AddReviewProps = {
  film: FilmType;
}


function AddReviewForm({ film }: AddReviewProps): JSX.Element {
  const [rating, setRating] = useState<number>(Math.round(film.rating));

  const dispatch = useAppDispatch();

  const reviewTextArea = useTextarea('');

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addCommentsAction({ filmId: film.id, comment: reviewTextArea.value, rating }));
  };

  return (
    <div className="add-review">
      <form action="" className="add-review__form" onSubmit={handleSubmitForm}>
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
