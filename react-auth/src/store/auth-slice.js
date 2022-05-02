import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialAuthState = {
    token: null,
    isLoggedIn: false,
    logoutTimer: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            const { token } = action.payload;
            state.token = token;
            state.isLoggedIn = true;
            localStorage.setItem('token', token);
        },
        logout(state) {
            state.token = null;
            state.isLoggedIn = false;
            localStorage.removeItem('token');
        },
        // setLogoutTimer(state, action) {
        //     state.logoutTimer = action.logoutTimer;
        // }
    }
})

const store = configureStore({
    reducer: { auth: authSlice.reducer }
})



export const authActions = authSlice.actions;
export default store;