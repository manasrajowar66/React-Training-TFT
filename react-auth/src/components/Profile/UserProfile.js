import ProfileForm from './ProfileForm';
//import AuthContext from '../../store/auth-context';
//import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  //const authCtx = useContext(AuthContext);
  //const { token } = authCtx;
  const token = useSelector(state => state.auth.token);
  const history = useHistory();
  const onChangePassword = async (newPassword) => {
    try {
      const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCRWb5XQx6dlbARHzwcHErYD87sIlhSU7I', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idToken: token,
          password: newPassword,
          returnSecureToken: false
        })
      });
      if (!res.ok) {
        throw new Error('Something Went Wrong');
      }
      console.log('Password Changed', newPassword);
      history.replace('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={onChangePassword} />
    </section>
  );
};

export default UserProfile;
