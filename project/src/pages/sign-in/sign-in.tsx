import React, { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { PASSWORD_VALIDATE_ERROR_TEXT } from '../../consts';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import useInput from '../../hooks/useInput';
import { loginAction } from '../../store/api-actions';
import validatePassword from '../../toolkits/validatePassword';
import { AuthData } from '../../types/auth';

function SignIn(): JSX.Element {
  const [isShowError, setIsShowError] = useState<boolean>(false);

  const email = useInput('');
  const password = useInput('');

  const dispatch = useAppDispatch();

  const isValidate = validatePassword(password.value);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleInvalidEmail = () => {
    setIsShowError(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidate) {
      toast.info(PASSWORD_VALIDATE_ERROR_TEXT);
      return;
    }

    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  useEffect(() => {
    setIsShowError(false);
  }, [email.value]);

  return (
    <div className="user-page">
      <Header className="user-page__head" title={{text: 'Sign in'}} />

      <div className="sign-in user-page__content">
        <form
          action=""
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          {isShowError &&
          <div className="sign-in__message">
            <p>Please enter a valid email address</p>
          </div>}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                value={email.value}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onInvalid={handleInvalidEmail}
                onChange={email.onChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                value={password.value}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={password.onChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
