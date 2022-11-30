import React from 'react';
import { FilmType } from '../../types/films';

type BreadcrumbsProps = {
  film: FilmType;
}

function Breadcrumbs({ film }: BreadcrumbsProps): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="film-page.html" className="breadcrumbs__link">{film.name}</a>
        </li>
        <li className="breadcrumbs__item">
          <a href="/" className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
