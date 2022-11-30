import React, { ChangeEvent } from 'react';

type StarProps = {
  index: number;
  checked: boolean;
  handleChange: (value: number) => void;
}

function Star({ index, checked, handleChange }: StarProps): JSX.Element {
  const handleChangeRating = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(+e.target.value);
  };

  return (
    <>
      <input
        className="rating__input"
        id={`star-${index}`}
        type="radio"
        name="rating"
        value={index}
        checked={checked}
        onChange={handleChangeRating}
      />
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
    </>
  );
}

export default Star;
