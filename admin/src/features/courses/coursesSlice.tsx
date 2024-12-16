import { createSlice } from '@reduxjs/toolkit';

import { deleteCourse, fetchCourse, fetchCourses, updateCourse } from './coursesThunk';

const coursesSlice = createSlice({
  name: 'auth',
  initialState: {
    courses: [],
    course: null,
    totalPages: 0,
    currentPage: 0,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCourses.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload.courses;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCourse.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        const index = state.courses.findIndex(course => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter(course => course.id !== action.payload);
      });
  },
});

// export const { addCourse, updateCourse, fetchCourse, fetchCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
