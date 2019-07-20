import reducer from '../../src/reducers/loading';
import * as Types from '../../src/ActionTypes';

const initialState = {
  isLoading: false,
};

describe('Loading reducer', () => {
  it('should set the loading flag to true', () => {
    expect(reducer(initialState, {
      type: Types.SET_LOADING,
      payload: {
        isLoading: true
      },
    })).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('should set the loading flag to false', () => {
    expect(reducer(initialState, {
      type: Types.SET_LOADING,
      payload: {
        isLoading: false
      },
    })).toEqual({
      ...initialState,
      isLoading: false
    });
  });
});
