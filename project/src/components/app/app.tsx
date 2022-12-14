import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import SignIn from '../../pages/sign-in/sign-in';
import { AppRoute, AuthorizationStatus } from '../../consts';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks/useAppSelector';
import Spinner from '../spinner/spinner';
import s from './app.module.scss';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import { getIsFilmsDataLoading } from '../../store/films-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { fetchFavoriteAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/useAppDispatch';

function App(): JSX.Element {
  const isFilmsDataLoading = useAppSelector(getIsFilmsDataLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth){
      dispatch(fetchFavoriteAction());
    }
  }, [authorizationStatus, dispatch]);

  if (isFilmsDataLoading) {
    return <Spinner className={s.spinner} />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute>
            <MyList/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<Film />} />
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
