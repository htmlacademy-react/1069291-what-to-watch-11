import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getFilms } from '../../store/films-process/selectors';
import toFormatPlayerTime from '../../toolkits/toFormatPlayerTime';

function Player(): JSX.Element {
  const [isPlayed, setIsPlayed] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const films = useAppSelector(getFilms);
  const navigate = useNavigate();
  const { id } = useParams();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentFilm = films.find((film) => film.id === Number(id));

  const timeLeft = Number(currentFilm?.runTime) * 60 - currentTime;
  const currentTimePercent = Number(currentFilm && (currentTime * 100 / (currentFilm.runTime * 60)));

  const handleClickOnExit = () => {
    navigate(AppRoute.Main);
  };

  const handleTimeUpdate = () => {
    videoRef.current && setCurrentTime(videoRef.current.currentTime);
  };

  const handleTogglePlay = () => {
    if (!isPlayed) {
      videoRef.current && videoRef.current.play();
    } else {
      videoRef.current && videoRef.current.pause();
    }

    setIsPlayed((value) => !value);
  };


  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      video && video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={currentFilm?.videoLink}
        className="player__video"
        poster={currentFilm?.backgroundImage}
      >
        <img src={currentFilm?.backgroundImage} alt={currentFilm?.name} />
      </video>

      <button type="button" className="player__exit" onClick={handleClickOnExit}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentTimePercent} max="100"></progress>
            <div className="player__toggler" style={{ left: `${currentTimePercent}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{toFormatPlayerTime(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handleTogglePlay}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              {isPlayed ? <use xlinkHref="#pause"></use> : <use xlinkHref="#play-s"></use>}
            </svg>
            <span>{isPlayed ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">{currentFilm?.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
