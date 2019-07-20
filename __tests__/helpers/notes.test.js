import { getNotes } from '../../src/helpers/notes';

const notes = {
  5: 4,
  10: 15,
  20: 7
}

describe('Notes test', () => {
  it('should work as expected and output the notes used, all avilable notes now and the current balance', () => {
    expect(getNotes(notes, 270, 100)).toEqual(
      {
        lastTransaction: { '5': 2, '10': 1, '20': 4 },
        notes: { '5': 2, '10': 14, '20': 3 },
        currentBalance: 170
      }
    );
  });

  it('should output a failure message because the amount is not valid', () => {
    expect(getNotes(notes, 270, 'test')).toEqual(
      {
        lastTransaction: 'Please enter a valid amount.',
        notes: { '5': 4, '10': 15, '20': 7 },
        currentBalance: 270
      }
    );
  });

  it('should output a failure message because the amount is not divisible by 5', () => {
    expect(getNotes(notes, 270, 102)).toEqual(
      {
        lastTransaction: 'Please enter an amount divisible by 5.',
        notes: { '5': 4, '10': 15, '20': 7 },
        currentBalance: 270
      }
    );
  });

  it('should output a failure message because the amount is more than the current balance', () => {
    expect(getNotes(notes, 270, 400)).toEqual(
      {
        lastTransaction: 'You have exceeded your balance.',
        notes: { '5': 4, '10': 15, '20': 7 },
        currentBalance: 270
      }
    );
  });
});