import { SET_AUTH } from '../actionTypes';

const initialState = {
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated
      };

    default: return state;
  }
};
