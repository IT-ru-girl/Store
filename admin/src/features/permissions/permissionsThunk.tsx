// Base URL for the API
import { createAsyncThunk } from '@reduxjs/toolkit';

import apiClient from '../../utils/apiClient';
export interface IPermission {
  name: string;
  description: string;
}


interface IUpdatePermission {
  permissionId: string;
  updatedPermission: {
    name: string;
    description: string;
  };
}
const API_URL = '/permissions';

// Async Thunks for fetching and creating permissions
// Fetch all permissions
export const fetchPermissions = createAsyncThunk('permissions/fetchPermissions', async () => {
  const response = await apiClient.get(API_URL);
  return response.data;
});

// Fetch specific permission
export const fetchPermission = createAsyncThunk('permissions/fetchPermission', async permissionId => {
  const response = await apiClient.get(`${API_URL}/${permissionId}`);
  return response.data;
});

// Add a new permission
export const addPermission = createAsyncThunk<IPermission,IPermission>('permissions/addPermission', async newPermission => {
  const response = await apiClient.post(API_URL, newPermission);
  return response.data;
});

// Update a permission
export const updatePermission = createAsyncThunk(
  'permissions/updatePermission',
  async ({ permissionId, updatedPermission }: IUpdatePermission) => {
    const response = await apiClient.put(`${API_URL}/${permissionId}`, updatedPermission);
    return response.data;
  },
);

// Delete a permission
export const deletePermission = createAsyncThunk('permissions/deletePermission', async permissionId => {
  await apiClient.delete(`${API_URL}/${permissionId}`);
  return permissionId;
});
