import React from 'react';
import s from './spinner.module.scss';
import cm from 'classnames';

type SpinnerProps = {
  className?: string;
}

function Spinner({ className }: SpinnerProps): JSX.Element {
  return (
    <svg className={cm(s.spinner, { className })} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle className={s.path} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
  );
}

export default Spinner;
