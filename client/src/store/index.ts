import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth-slice';
import { courseReducer } from './slices/course-slice';

const rootReducer = combineReducers({
    auth: authReducer,
    course: courseReducer
  });
  

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer
});

export * from './thunks/signUp'