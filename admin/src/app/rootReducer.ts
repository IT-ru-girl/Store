import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import coursesReducer from '../features/courses/coursesSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import permissionReducer from '../features/permissions/permissionSlice';
import permissionsReducer from '../features/permissions/permissionsSlice';
import userReducer from '../features/users/userSlice';
import usersReducer from '../features/users/usersSlice';
import {cartReducer} from "../pages/shop/slice/cartSlice.tsx";
import { productsReducer } from '../pages/shop/slice/productSlice.tsx';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  courses: coursesReducer,
  permissions: permissionsReducer,
  permission: permissionReducer,
  users: usersReducer,
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;
