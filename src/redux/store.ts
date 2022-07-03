import { configureStore } from '@reduxjs/toolkit';
import flowers from './slices/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    flowers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();