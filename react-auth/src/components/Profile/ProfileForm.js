import classes from './ProfileForm.module.css';
import { useRef } from 'react';

const ProfileForm = (props) => {
  const passwordRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newPassword = passwordRef.current.value;
    props.onChangePassword(newPassword);
  }
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input minLength='6' ref={passwordRef} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
