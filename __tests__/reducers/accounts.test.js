import reducer from '../../src/reducers/accounts';
import * as Types from '../../src/ActionTypes';

const initialState = {
  currentBalance: 270,
  notes: {
    5: 4,
    10: 15,
    20: 7
  },
  lastTransaction: {}
};

describe('Accounts reducer', () => {
  it('should set the balance', () => {
    expect(reducer(initialState, {
      type: Types.SET_BALANCE,
      payload: {
        currentBalance: 270
      },
    })).toEqual({
      ...initialState,
      currentBalance: 270,
    });
  });

  it('should withdraw money, update the notes left, current balance and add a last transaction record', () => {
    expect(reducer(initialState, {
      type: Types.WITHDRAW,
      payload: {
        amount: 100
      },
    })).toEqual({
      ...initialState,
      notes: {
        10: 14,
        20: 3,
        5: 2
      },
      lastTransaction: {
        10: 1,
        20: 4,
        5: 2
      },
      currentBalance: 170
    });
  });
});
