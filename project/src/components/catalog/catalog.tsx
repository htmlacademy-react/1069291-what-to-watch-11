import classNames from 'classnames';
import React, { useState, MouseEvent, useCallback } from 'react';
import { ALL_GENRES_CATEGORY_NAME } from '../../consts';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { changeGenre } from '../../store/action';
import { geActiveGenre } from '../../store/films-process/selectors';
import { FilmType } from '../../types/films';
import FilmList from '../film-list/film-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';

type CatalogProps = {
  className?: string;
  films: FilmType[];
  title?: string;
  withGenres?: boolean;
}

function Catalog({ className, title, films, withGenres }: CatalogProps): JSX.Element {
  const [maxCount, setMaxCount] = useState<number>(8);
  const activeGenre = useAppSelector(geActiveGenre);

  const dispatch = useAppDispatch();

  const genres: string[] = [ALL_GENRES_CATEGORY_NAME, ...films.reduce((prev: string[], film: FilmType) => {
    if (!prev.find((el) => el === film.genre)) {
      return [...prev, film.genre];
    } else {
      return prev;
    }
  }, [])].slice(0, 10);

  const filmsFilteredByGenres = withGenres && activeGenre !== ALL_GENRES_CATEGORY_NAME ? films.filter(({ genre }) => activeGenre === genre) : films;
  const filmsFilteredByNumber = maxCount ? filmsFilteredByGenres.slice(0, maxCount) : filmsFilteredByGenres;

  const isShowMoreBtn = filmsFilteredByNumber.length < filmsFilteredByGenres.length;

  const handleClickGenre = (e: MouseEvent<HTMLAnchorElement>, genre: string) => {
    e.preventDefault();

    dispatch(changeGenre(genre));
  };

  const handleClickShowMore = useCallback(() => {
    setMaxCount((value) => value + 8);
  }, []);

  return (
    <section className={`catalog ${className ? className : ''}`}>
      {title && <h2 className="catalog__title">{title}</h2>}

      {withGenres && genres &&
        <ul className="catalog__genres-list">
          {genres.map((genre) => (
            <li
              key={genre}
              className={classNames('catalog__genres-item', { 'catalog__genres-item--active': activeGenre === genre })}
            >
              <a href="/" className="catalog__genres-link" onClick={(e) => handleClickGenre(e, genre)}>{genre}</a>
            </li>))}
        </ul> }

      <FilmList films={filmsFilteredByNumber} />

      {isShowMoreBtn && <ShowMoreBtn handleClick={handleClickShowMore} />}
    </section>
  );
}

export default Catalog;
