import React from 'react';
import Catalog from '../../components/catalog/catalog';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks/useAppSelector';

function Main(): JSX.Element {
  const films = useAppSelector((state) => state.films);

  return (
    <div>
      {films[0] && <FilmCard film={films[0]} />}

      <div className="page-content">
        <Catalog filteredfilms={films} />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
