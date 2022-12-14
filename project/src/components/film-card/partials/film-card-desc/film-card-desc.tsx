import React, { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../../consts';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { updateFavoriteFilmStatusAction } from '../../../../store/api-actions';
import { getFavorite } from '../../../../store/films-process/selectors';
import { getAuthorizationStatus } from '../../../../store/user-process/selectors';
import { FilmType } from '../../../../types/films';

type FilmCardDescProps = {
  film: FilmType;
  children?: ReactNode;
}

function FilmCardDesc({ film, children }: FilmCardDescProps): JSX.Element {
  const favorite = useAppSelector(getFavorite);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const location = useLocation();
  const dispatch = useAppDispatch();

  const isFavorite = favorite.find(({ id }) => id === film.id);
  const favoriteLength = favorite.length;
  const isFilmPage = location.pathname.includes('/films');

  const navigate = useNavigate();

  const handleClickOnPlayBtn = () => {
    navigate(AppRoute.Player.replace(':id', String(film.id)));
  };

  const handleClickOnMyListBtn = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.SignIn);
      return;
    }

    if (!isFilmPage) {
      navigate(AppRoute.MyList);
    } else {
      dispatch(updateFavoriteFilmStatusAction({ id: film.id, status: isFavorite ? 0 : 1 }));
    }
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
            {isFavorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
          </svg>
          <span>My list</span>
          {favoriteLength !== 0 && <span className="film-card__count">{favoriteLength}</span>}
        </button>
        { children }
      </div>
    </div>
  );
}

export default FilmCardDesc;
