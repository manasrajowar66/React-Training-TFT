import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
//import AuthContext from './store/auth-context';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth-slice';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { Redirect } from 'react-router-dom';

function App() {
  //const authCtx = useContext(AuthContext);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(authActions.login({ token }));

    }
  }, [dispatch])
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {
          !isLoggedIn &&
          <Route path='/auth'>
            <AuthPage />
          </Route>
        }
        <Route path='/profile'>
          {isLoggedIn && <UserProfile />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
