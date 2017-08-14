import { combineReducers } from 'redux';

import ExpirationItemsReducer from './expiration-items.reducer';

export default combineReducers({
  expirationItems: ExpirationItemsReducer,
});

