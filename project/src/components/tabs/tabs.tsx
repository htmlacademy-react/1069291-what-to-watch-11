import React, { useState, MouseEvent } from 'react';
import cm from 'classnames';
import { FilmType } from '../../types/films';
import Details from './content/details';
import Overview from './content/overview';
import Reviews from './content/reviews';

type TabsProps = {
  film: FilmType;
}


function Tabs({ film }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('Overview');

  const handleClickTab = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const target = e.target as HTMLElement;
    setActiveTab(target.innerText);
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {['Overview', 'Details', 'Reviews'].map((name) => (
            <li key={name} className={cm('film-nav__item', { 'film-nav__item--active': name === activeTab })}>
              <a href="/" className='film-nav__link' onClick={handleClickTab}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
      {activeTab === 'Overview' && <Overview film={film} />}
      {activeTab === 'Details' && <Details film={film} />}
      {activeTab === 'Reviews' && <Reviews film={film} />}
    </>
  );
}

export default Tabs;
