function superbowlWin(record) {
    // Use the find() method to look for an object with a result of "W"
    const winRecord = record.find(game => game.result === "W");
  
    // If a winRecord is found, return the year; otherwise, return undefined
    return winRecord ? winRecord.year : undefined;}