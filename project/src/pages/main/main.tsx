import React, { useEffect } from 'react';
import Catalog from '../../components/catalog/catalog';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { genres } from '../../mocks/genres';
import { updateFilms } from '../../store/action';

function Main(): JSX.Element {
  const films = useAppSelector((state) => state.films);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateFilms(true));
  }, [dispatch]);

  return (
    <div>
      {films[0] && <FilmCard film={films[0]} />}

      <div className="page-content">
        <Catalog filteredfilms={films} genres={genres} />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
