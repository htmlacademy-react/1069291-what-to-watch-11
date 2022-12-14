import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppRoute, AuthorizationStatus, OPEN_FAVORITE_ERROR } from '../../consts';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logoutAction } from '../../store/api-actions';
import { getFavorite } from '../../store/films-process/selectors';
import { getAuthorizationStatus, getUser } from '../../store/user-process/selectors';

function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const favorite = useAppSelector(getFavorite);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickAvatar = () => {
    if (!favorite.length) {
      toast.info(OPEN_FAVORITE_ERROR);
      return;
    }

    navigate(AppRoute.MyList);
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <div className="user-block">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      </div>
    );
  }

  return (
    <ul className="user-block">
      {user &&
      <li className="user-block__item">
        <div className="user-block__avatar" onClick={handleClickAvatar}>
          <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>}
      <li className="user-block__item">
        <a href="/" className="user-block__link" onClick={(e) => {
          e.preventDefault();
          dispatch(logoutAction());
        }}
        >Sign out
        </a>
      </li>
    </ul>
  );
}

export default UserBlock;
