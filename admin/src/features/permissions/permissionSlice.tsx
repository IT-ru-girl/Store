import { createSlice } from '@reduxjs/toolkit';

import { addPermission, deletePermission, fetchPermission, updatePermission } from './permissionsThunk';

const initialState = {
  permission: null,
  status: 'idle', // 'idle' | 'fetching' | 'fetched' | 'failed'
  error: null,
};

const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPermission.pending, state => {
        state.status = 'fetching';
      })
      .addCase(fetchPermission.fulfilled, (state, action) => {
        state.status = 'fetched';
        state.permission = action.payload;
      })
      .addCase(fetchPermission.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPermission.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.permission = action.payload;
      })
      .addCase(updatePermission.fulfilled, (state, action) => {
        state.permission = action.payload.permission;
        state.status = 'succeeded';
      })
      .addCase(deletePermission.fulfilled, (state, action) => {
        state.status = 'succeeded';
      });
  },
});

export const { resetState } = permissionSlice.actions;
export default permissionSlice.reducer;
