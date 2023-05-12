import { configureStore } from '@reduxjs/toolkit';
import { popupReducer } from '@/store/features/popupSlice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
