import React from 'react';

type PropsShowMoreBtn = {
  handleClick: () => void;
}

function ShowMoreBtn({ handleClick }: PropsShowMoreBtn): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleClick}>Show more</button>
    </div>
  );
}

export default ShowMoreBtn;
