import React from 'react';
import Logo from '../logo/logo';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import { FilmType } from '../../types/films';
import UserBlock from '../user-block/user-block';

type HeaderProps = {
  breadcrumbs?: boolean;
  userBlock?: boolean;
  film?: FilmType;
  className?: string;
  title?: {
    text: string;
    info?: string;
  };
}

function Header({ className, breadcrumbs, userBlock, film, title }: HeaderProps): JSX.Element {
  return (
    <header className={`page-header ${className ? className : ''}`}>
      <Logo />

      { breadcrumbs && film && <Breadcrumbs film={film} /> }
      { title && <h1 className="page-title user-page__title">{title.text} {title.info && <span className="user-page__film-count">{title.info}</span>}</h1>}
      { userBlock && <UserBlock /> }
    </header>
  );
}

export default Header;
