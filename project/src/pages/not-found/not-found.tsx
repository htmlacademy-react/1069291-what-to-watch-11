import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <div>404 Not Found</div>
      <div><Link to="/">Перейти на главную</Link></div>
    </>
  );
}

export default NotFound;
