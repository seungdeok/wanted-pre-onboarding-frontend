import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { popupReducer } from '@/store/features/popupSlice';

const rootReducer = combineReducers({
  popup: popupReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
