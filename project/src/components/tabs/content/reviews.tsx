import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { clearComments } from '../../../store/action';
import { fetchCommentsAction } from '../../../store/api-actions';
import { FilmType } from '../../../types/films';
import Review from '../../review/review';

type ReviewsProps = {
  film: FilmType;
}

function Reviews({ film }:ReviewsProps): JSX.Element {
  const comments = useAppSelector((state) => state.comments);

  const leftColumnElements = comments.slice(0, Math.ceil((comments.length) / 2));
  const rightColumnElements = comments.slice(Math.ceil((comments.length) / 2), comments.length);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCommentsAction(film.id));

    return () => {
      dispatch(clearComments());
    };
  }, [dispatch, film.id]);

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
