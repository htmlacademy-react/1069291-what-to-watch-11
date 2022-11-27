import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import { AppRoute, AuthorizationStatus } from '../../consts';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  name: string;
  genre: string;
  releaseYear: string;
}

function App({ name, genre, releaseYear }: AppProps): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Main name={name} genre={genre} releaseYear={releaseYear} />} />
      <Route path={AppRoute.SignIn} element={<SignIn />} />
      <Route path={AppRoute.MyList} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.Unknown}>
          <MyList />
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Film} element={<Film />} />
      <Route path={AppRoute.AddReview} element={<AddReview />} />
      <Route path={AppRoute.Player} element={<Player />} />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
