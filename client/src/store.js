import { configureStore } from '@reduxjs/toolkit';

import studentReducer from './features/studentSlice';
import appReducer from './features/appSlice';

export const store = configureStore({
  reducer: {
    appSlice: appReducer,
    studentSlice: studentReducer,
  },
})