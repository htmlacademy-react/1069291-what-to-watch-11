import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute, OPEN_FAVORITE_ERROR } from '../../consts';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchFavoriteAction } from '../../store/api-actions';
import { getFavorite } from '../../store/films-process/selectors';

function MyList(): JSX.Element {
  const favorite = useAppSelector(getFavorite);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!favorite.length) {
      toast.info(OPEN_FAVORITE_ERROR);
      navigate(AppRoute.Main);
    }
  }, [favorite.length, navigate]);

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
