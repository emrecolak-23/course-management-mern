import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth-slice';

const rootReducer = combineReducers({
    auth: authReducer,
  });
  

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer
});

export * from './thunks/signUp'