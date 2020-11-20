import { combineReducers } from 'redux';

import restaurants from '../modules/restaurants';

export const rootReducer = combineReducers({
  restaurants,
});

export type RootState = ReturnType<typeof rootReducer>;
