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
import { FilmType } from '../../types/films';
import { myList } from '../../mocks/my-list';
import { GenreType } from '../../types/genres';

type AppProps = {
  films: FilmType[];
  genres: GenreType[];
}

function App({ films, genres }: AppProps): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Main films={films} genres={genres} />} />
      <Route path={AppRoute.SignIn} element={<SignIn />} />
      <Route path={AppRoute.MyList} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.Unknown}>
          <MyList films={myList} />
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Film} element={<Film films={films} />} />
      <Route path={AppRoute.AddReview} element={<AddReview films={films} />} />
      <Route path={AppRoute.Player} element={<Player films={films} />} />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
