import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../../app/store";

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    sidebarOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});
export const { toggleSidebar } = dashboardSlice.actions;
export default dashboardSlice.reducer;
