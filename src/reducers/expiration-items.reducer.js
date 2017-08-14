
import {
  GET_EXPIRATION_ITEMS_FAILURE,
  GET_EXPIRATION_ITEMS_SUCCESS,
} from '../actions/expiration-items.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPIRATION_ITEMS_FAILURE:
      return state;
    case GET_EXPIRATION_ITEMS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
