import React, { useState } from 'react';
import { FilmType } from '../../types/films';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmListProps = {
  films: FilmType[];
}


function FilmList({ films }: FilmListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<FilmType | null>(null);

  const handleMouseEnter = (film: FilmType) => {
    setActiveFilm(film);
  };

  const handleMouseLeave = () => {
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => <SmallFilmCard key={film.id} active={activeFilm?.id === film.id} film={film} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />)}
    </div>
  );
}

export default FilmList;
