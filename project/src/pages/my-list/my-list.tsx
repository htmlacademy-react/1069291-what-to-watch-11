import React from 'react';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { FilmType } from '../../types/films';

type MyListProps = {
  films: FilmType[];
}

function MyList({ films }: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <Header className="user-page__head" title={{text: 'My list', info: '9'}} />
      <Catalog films={films} />
      <Footer />
    </div>
  );
}

export default MyList;
