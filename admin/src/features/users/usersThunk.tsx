// Base URL for the API
import { createAsyncThunk } from '@reduxjs/toolkit';

import apiClient from '../../utils/apiClient';

 export interface UserState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed' | 'fetching' | 'fetched';
  error: string | null;
}

 export interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

 export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  role: string;
}

 export interface UpdateUserPayload {
  userId: string;
  updatedUser: User;
}
const API_URL = '/users';

// Async Thunks for fetching and creating users
// Fetch all users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await apiClient.get(API_URL);
  return response.data;
});

// Fetch specific user
export const fetchUser = createAsyncThunk('users/fetchUser', async userId => {
  const response = await apiClient.get(`${API_URL}/${userId}`);
  return response.data;
});

// Add a new user
export const addUser = createAsyncThunk('users/addUser', async newUser => {
  const response = await apiClient.post(API_URL, newUser);
  return response.data;
});

// Update a user
export const updateUser = createAsyncThunk('users/updateUser', async ({ userId, updatedUser }:UpdateUserPayload) => {
  const response = await apiClient.put(`${API_URL}/${userId}`, updatedUser);
  return response.data;
});

// Delete a user
export const deleteUser = createAsyncThunk('users/deleteUser', async userId => {
  await apiClient.delete(`${API_URL}/${userId}`);
  return userId;
});
