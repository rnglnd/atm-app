import { SET_BALANCE, WITHDRAW } from '../actionTypes';
import { getNotes } from '../helpers/notes';

const initialState = {
  currentBalance: 0,
  notes: {
    5: 4,
    10: 15,
    20: 7
  },
  lastTransaction: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return {
        ...state,
        currentBalance: action.payload.currentBalance
      };

    case WITHDRAW:
      const callNotes = getNotes(state.notes, state.currentBalance, action.payload.amount);

      return {
        ...state,
        notes: callNotes.notes,
        lastTransaction: callNotes.lastTransaction,
        currentBalance: callNotes.currentBalance
      };

    default: return state;
  }
};
