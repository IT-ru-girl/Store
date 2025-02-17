import AuthService, {ICredentials} from './authService';
import { loginRequest, loginSuccess, loginFailure, logout } from './authSlice';
import {AppDispatch} from "../../app/store";

export const login = (credentials: ICredentials) => async (dispatch: AppDispatch) => {
  dispatch(loginRequest());
  try {
    const user = await AuthService.login(credentials);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const checkAuth = () => (dispatch:AppDispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    // Optionally verify token or fetch user data
    dispatch(loginSuccess(token));
  } else {
    dispatch(logout());
  }
};
