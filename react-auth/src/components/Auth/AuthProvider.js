import store from '../../store/auth-slice';
import { Provider } from 'react-redux';


// const calculateRemainingTime = (expireTime) => {
//     const currTime = new Date().getTime();
//     const AdjTime = new Date(expireTime).getTime();
//     const remainingTime = AdjTime - currTime;
//     return remainingTime;
// }

// const retrieveStoredToken = () => {
//     const storedToken = localStorage.getItem('token');
//     const storedExpirationDate = localStorage.getItem('expirationTime');

//     const remainingTime = calculateRemainingTime(storedExpirationDate);

//     if (remainingTime <= 3600) {
//         localStorage.removeItem('token');
//         localStorage.removeItem('expirationTime');
//         return null;
//     }

//     return {
//         token: storedToken,
//         duration: remainingTime,
//     };
// };

export const AuthProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}


