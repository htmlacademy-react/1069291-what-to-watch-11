import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

type LogoProps = {
  className?: string;
}

function Logo({ className }: LogoProps): JSX.Element {
  return (
    <div className="logo">
      <Link to={AppRoute.Main} className={`logo__link ${className ? className : ''}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
