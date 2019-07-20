import reducer from '../../src/reducers/auth';
import * as Types from '../../src/ActionTypes';

const initialState = {
  isAuthenticated: false,
};

describe('Auth reducer', () => {
  it('should set the auth flag to true', () => {
    expect(reducer(initialState, {
      type: Types.SET_AUTH,
      payload: {
        isAuthenticated: true
      },
    })).toEqual({
      ...initialState,
      isAuthenticated: true
    });
  });

  it('should set the auth flag to false', () => {
    expect(reducer(initialState, {
      type: Types.SET_AUTH,
      payload: {
        isAuthenticated: false
      },
    })).toEqual({
      ...initialState,
      isAuthenticated: false
    });
  });
});
