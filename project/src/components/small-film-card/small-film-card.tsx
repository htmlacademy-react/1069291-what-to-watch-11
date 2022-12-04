import React from 'react';
import { Link } from 'react-router-dom';
import { FilmType } from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: FilmType;
  active: boolean;
  handleMouseEnter: (film: FilmType) => void;
  handleMouseLeave: () => void;
}

function SmallFilmCard({ film, active, handleMouseEnter, handleMouseLeave }: SmallFilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => handleMouseEnter(film)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film} active={active} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
