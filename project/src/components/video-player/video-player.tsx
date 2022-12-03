import React, { useEffect, useRef } from 'react';
import { FilmType } from '../../types/films';

type VideoPlayerProps = {
  film: FilmType;
  active: boolean;
}

function VideoPlayer({ film, active }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (!videoRef.current) {return;}

    if (active) {
      timeout = setTimeout(() => {
        videoRef.current && videoRef.current.play();
      }, 1000);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [active]);

  return (
    <video
      ref={videoRef}
      src={active ? film.movie : ''}
      poster={film.preview}
      muted
      width="280"
      height="175"
      preload="none"
    >
      <img src={film.preview} alt={film.name} />
    </video>
  );
}

export default VideoPlayer;
