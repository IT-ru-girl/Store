import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import coursesReducer from '../features/courses/coursesSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import permissionReducer from '../features/permissions/permissionSlice';
import permissionsReducer from '../features/permissions/permissionsSlice';
import userReducer from '../features/users/userSlice';
import usersReducer from '../features/users/usersSlice';
import {cartReducer} from "../features/cart/cartSlice.tsx";
import { productsReducer } from '../features/cart/productSlice.tsx';
import { newProductReducer, newProductsReducer } from '../features/cart/newProductSlice.tsx';

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
  new_product: newProductReducer
});

export default rootReducer;
