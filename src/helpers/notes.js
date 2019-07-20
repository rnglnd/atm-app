export const getNotes = (notes, currentBalance, amount) => {
  if (amount > (currentBalance + 100)) {
    return { lastTransaction: 'You have exceeded your balance.', notes, currentBalance };
  }
  
  const parsedAmount = parseInt(amount);
  let newNotes = { ...notes };
  let notesUsed = {};
  
  if (isNaN(parsedAmount)) {
    return { lastTransaction: 'Please enter a valid amount.', notes, currentBalance };
  }
  
  if (parsedAmount % 5 !== 0) {
    return { lastTransaction: 'Please enter an amount divisible by 5.', notes, currentBalance };
  }
  
  // If it can be a single note then return it.
  if (newNotes[parsedAmount]) {
    newNotes[parsedAmount] = newNotes[parsedAmount] - 1;
    return { notesUsed: { [parsedAmount]: 1 }, notes: newNotes };
  }
  
  // i is for the 
  const inner = (i = 0, totalRequired = 0) => {
    if (totalRequired >= parsedAmount) {
      return;
    };
    
    // Use 5s & 10s for the first iteration for note diversity
    if (i === 0) {
      notesUsed = {
        5: 2,
        10: 1,
        20: 0
      };
      
      newNotes[5] = newNotes[5] - 2;
      newNotes[10] = newNotes[10] - 1;
      
      return inner(i + 5, totalRequired + 20);
    }
    
    if (parsedAmount - totalRequired >= 20 && newNotes[20] !== 0) {
        notesUsed[20] = notesUsed[20] + 1;
        newNotes[20] = newNotes[20] - 1;
        return inner(i + 5, totalRequired + 20);
    }
    
    // Check to catch if a 5 is required
    if (parsedAmount - totalRequired === 5) {
      notesUsed[5] = notesUsed[5] + 1;
      newNotes[5] = newNotes[5] - 1;
      return;
    }
    
    if(newNotes[10] !== 0) {
        notesUsed[10] = notesUsed[10] + 1;
        newNotes[10] = newNotes[10] - 1;
        return inner(i + 5, totalRequired + 10);
      }
    
    if(newNotes[5] !== 0) {
      notesUsed[5] = notesUsed[5] + 1;
      newNotes[5] = newNotes[5] - 1;
      return inner(i + 5, totalRequired + 5);
    }
  }
  
  inner();

  return { lastTransaction: notesUsed, notes: newNotes, currentBalance: currentBalance - amount };
};
