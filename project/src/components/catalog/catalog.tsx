import React, { useMemo } from 'react';
import { FilmType } from '../../types/films';
import { GenreType } from '../../types/genres';
import FilmList from '../film-list/film-list';

type CatalogProps = {
  className?: string;
  films: FilmType[];
  genres?: GenreType[];
  title?: string;
  maxCount?: number;
}

function Catalog({ className, films, genres, maxCount, title }: CatalogProps): JSX.Element {

  const filteredFilms = useMemo(() => {
    if (maxCount) {
      return films.slice(0, maxCount);
    }

    return films;
  }, [films, maxCount]);

  const isShowMoreBtn = useMemo(() => filteredFilms.length < films.length, [films.length, filteredFilms.length]);

  return (
    <section className={`catalog ${className ? className : ''}`}>
      {title && <h2 className="catalog__title">{title}</h2>}

      {genres &&
        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="/" className="catalog__genres-link">All genres</a>
          </li>
          {genres.map(({ id, name, link }) => (
            <li key={id} className="catalog__genres-item">
              <a href={link} className="catalog__genres-link">{name}</a>
            </li>))}
        </ul> }

      <FilmList films={filteredFilms} />

      {isShowMoreBtn &&
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>}
    </section>
  );
}

export default Catalog;
