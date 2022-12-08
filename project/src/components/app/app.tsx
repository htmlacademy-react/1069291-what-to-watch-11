import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import SignIn from '../../pages/sign-in/sign-in';
import { AppRoute } from '../../consts';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks/useAppSelector';
import Spinner from '../spinner/spinner';
import s from './app.module.scss';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';

function App(): JSX.Element {
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);

  if (isFilmsDataLoading) {
    return <div className={s.spinner}><Spinner /></div>;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute>
            <MyList films={[]} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<Film />} />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
        <Route path={AppRoute.Player} element={<Player films={[]} />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
