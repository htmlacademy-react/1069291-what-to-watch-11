import React, { useCallback, useState } from 'react';
import { FilmType } from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: FilmType;
  onClick: (id: number) => void;
}

function SmallFilmCard({ film, onClick }: SmallFilmCardProps): JSX.Element {
  const [active, setActive] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setActive(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'pointer' }}
      onClick={() => onClick(film.id)}
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film} active={active} />
      </div>
      <h3 className="small-film-card__title">
        <span className="small-film-card__link">{film.name}</span>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
