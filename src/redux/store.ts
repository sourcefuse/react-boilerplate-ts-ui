import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './apiSlice';
import authReducer from './auth/authSlice';
import configReducer from './config/configSlice';
import storageMiddleware from './middlewares/storageMiddleware';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    config: configReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(storageMiddleware, apiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
