const {TTT}=require('./ttt');

class ComputerPlayer {

  static getValidMoves(grid) {
    // Your code here
    let playerturn=TTT.playerTurn;
    if(playerturn==="X"){
      playerturn="O";
    }else{
      playerturn="X";
    }
    let newGrid=grid.map(function(ele){
      return ele.map(function(item){
        if(item===" "){
          return playerturn;
        }
      });
    });
    return newGrid;
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
