import React from 'react';
import avatar from '../../assets/img/avatar.jpg';

function UserBlock(): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={avatar} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a href="/" className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}

export default UserBlock;
