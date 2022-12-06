import classNames from 'classnames';
import React, { useState, MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { films } from '../../mocks/films';
import { changeGenre, updateFilms } from '../../store/action';
import { FilmType } from '../../types/films';
import { GenreType } from '../../types/genres';
import FilmList from '../film-list/film-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';

type CatalogProps = {
  className?: string;
  filteredfilms: FilmType[];
  title?: string;
  genres?: GenreType[];
}

function Catalog({ className, title, genres, filteredfilms }: CatalogProps): JSX.Element {
  const [maxCount, setMaxCount] = useState<number>(8);
  const genreId = useAppSelector((state) => state.genre);

  const dispatch = useAppDispatch();

  const filteredGenres: GenreType[] = genres ? genres.filter(({ id }) => films.find(({ genre }) => genre === id)) : [];

  const filmsFilteredByNumber = maxCount ? filteredfilms.slice(0, maxCount) : filteredfilms;

  const isShowMoreBtn = filmsFilteredByNumber.length < filteredfilms.length;

  const handleClickGenre = (e: MouseEvent<HTMLAnchorElement>, id: number) => {
    e.preventDefault();

    dispatch(changeGenre(id));
    dispatch(updateFilms(true));
  };

  const handleClickShowMore = () => {
    setMaxCount((value) => value + 8);
  };

  return (
    <section className={`catalog ${className ? className : ''}`}>
      {title && <h2 className="catalog__title">{title}</h2>}

      {genres && filteredGenres &&
        <ul className="catalog__genres-list">
          <li className={classNames('catalog__genres-item', { 'catalog__genres-item--active': genreId === 0 })}>
            <a href="/" className="catalog__genres-link" onClick={(e) => handleClickGenre(e, 0)}>All genres</a>
          </li>
          {filteredGenres.map(({ id, name }) => (
            <li
              key={id}
              className={classNames('catalog__genres-item', { 'catalog__genres-item--active': genreId === id })}
            >
              <a href="/" className="catalog__genres-link" onClick={(e) => handleClickGenre(e, id)}>{name}</a>
            </li>))}
        </ul> }

      <FilmList films={filmsFilteredByNumber} />

      {isShowMoreBtn && <ShowMoreBtn handleClick={handleClickShowMore} />}
    </section>
  );
}

export default Catalog;
