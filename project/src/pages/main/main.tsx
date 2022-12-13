import React, { useEffect } from 'react';
import Catalog from '../../components/catalog/catalog';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchPromoAction } from '../../store/api-actions';
import { getFilms, getPromo } from '../../store/films-process/selectors';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  const films = useAppSelector(getFilms);
  const promo = useAppSelector(getPromo);

  useEffect(() => {
    dispatch(fetchPromoAction());
  }, [dispatch]);

  return (
    <div>
      {promo && <FilmCard film={promo} />}

      <div className="page-content">
        <Catalog films={films} withGenres />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
