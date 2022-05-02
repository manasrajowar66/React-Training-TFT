import { useState, useRef } from 'react';
//import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';
import classes from './AuthForm.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';


// const calculateRemainingTime = (expireTime) => {
//   const currTime = new Date().getTime();
//   const AdjTime = new Date(expireTime).getTime();
//   const remainingTime = AdjTime - currTime;
//   return remainingTime;
// }

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isError, setError] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  //const authCtx = useContext(AuthContext);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const sendRequest = async (email, password) => {
    setError(null);
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRWb5XQx6dlbARHzwcHErYD87sIlhSU7I';
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRWb5XQx6dlbARHzwcHErYD87sIlhSU7I'
    }
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error.errors[0].message || 'Authentication Failed!');
      }

      //localStorage.setItem('token', data.idToken);
      // const expirationTime = new Date((new Date().getTime()) + (+data.expiresIn * 1000));
      //authCtx.login(data.idToken, expirationTime.toISOString());
      console.log(data.idToken);

      dispatch(authActions.login({ token: data.idToken }));

      // const remainingTime = calculateRemainingTime(expirationTime);

      // const _logoutTimer = setTimeout(dispatch(authActions.logout()), remainingTime);
      // dispatch(authActions.setLogoutTimer({ logoutTimer: _logoutTimer }));

      history.replace('/');
    } catch (error) {
      setError(error.message);
    }
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    await sendRequest(enteredEmail, enteredPassword);
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          {isError && <p style={{ color: 'red' }}>{isError}</p>}
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
