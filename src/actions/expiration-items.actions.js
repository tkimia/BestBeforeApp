import { getExpirationItems } from '../services/expiration-items.service';
import ExpirationItem from '../models/expiration-item.model';

export const GET_EXPIRATION_ITEMS_SUCCESS = 'GET_EXPIRATION_ITEMS_SUCCESS';
export const GET_EXPIRATION_ITEMS_FAILURE = 'GET_EXPIRATION_ITEMS_FAILURE';

export function getExpirationItemsSuccess(expirationItems = []) {
  return {
    type: GET_EXPIRATION_ITEMS_SUCCESS,
    payload: expirationItems,
  };
}

export function getExpirationItemsFailure(msg = null) {
  return {
    type: GET_EXPIRATION_ITEMS_FAILURE,
    payload: msg,
  };
}

export function getExpirationItemsFromService() {
  return (dispatch) => {
    const expirationItems = getExpirationItems().map(item => new ExpirationItem(item));
    dispatch(getExpirationItemsSuccess(expirationItems));
  };
}
