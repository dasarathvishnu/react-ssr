import { FETCH_USERS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      console.log(action.payload,111111111);
      return action.payload;
    default:
      return state;
  }
};
