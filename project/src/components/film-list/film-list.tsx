import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FilmType } from '../../types/films';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmListProps = {
  films: FilmType[];
}


function FilmList({ films }: FilmListProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="catalog__films-list">
      {films.map((film) => <SmallFilmCard key={film.id} film={film} onClick={(id) => navigate(`/films/${id}`)} />)}
    </div>
  );
}

export default FilmList;
