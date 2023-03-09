const {TTT}=require('./ttt');

class ComputerPlayer {

  static getValidMoves(grid) {
    // Your code here
    let validMoves=[];
    grid.forEach((array,row) => {
      array.forEach((item,col) => {
      if(item===" "){
        validMoves.push({row:row,col:col});
      }
      });
    
    });
    return validMoves;
  }

  static randomMove(grid) {

    // Your code here
  }

  static getWinningMoves(grid, symbol) {

    // Your code here

  }

  static getSmartMove(grid, symbol) {

    // Your code here

  }

}

module.exports = ComputerPlayer;
