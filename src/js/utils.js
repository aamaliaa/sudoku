module.exports = {

  /**
   * returns empty board
   * @return array empty sudoku board of zeros
   */
  getEmptyBoard: function () {
    var i, j;
    var board = [];

    for (i = 0; i < 9; i++) {
      board[i] = [];
      for (j = 0; j < 9; j++) {
        board[i][j] = 0;
      }
    }

    return board;
  }

};
