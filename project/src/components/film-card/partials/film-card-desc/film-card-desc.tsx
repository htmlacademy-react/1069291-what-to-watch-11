import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../../consts';
import { FilmType } from '../../../../types/films';

type FilmCardDescProps = {
  film: FilmType;
  children?: ReactNode;
}


function FilmCardDesc({ film, children }: FilmCardDescProps): JSX.Element {
  const navigate = useNavigate();

  const handleClickOnPlayBtn = () => {
    navigate(AppRoute.Player);
  };

  const handleClickOnMyListBtn = () => {
    navigate(AppRoute.MyList);
  };

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>

      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button" type="button" onClick={handleClickOnPlayBtn}>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--list film-card__button" type="button" onClick={handleClickOnMyListBtn}>
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
          <span className="film-card__count">9</span>
        </button>
        { children }
      </div>
    </div>
  );
}

export default FilmCardDesc;
