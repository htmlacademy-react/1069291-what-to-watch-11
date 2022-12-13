import React, { useEffect } from 'react';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchFavoriteAction } from '../../store/api-actions';
import { getFavorite } from '../../store/films-process/selectors';

function MyList(): JSX.Element {
  const favorite = useAppSelector(getFavorite);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteAction());
  }, [dispatch]);

  return (
    <div className="user-page">
      <Header className="user-page__head" title={{text: 'My list', info: String(favorite.length)}} />
      <Catalog films={favorite} />
      <Footer />
    </div>
  );
}

export default MyList;
