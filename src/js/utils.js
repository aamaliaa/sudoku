var $ = require('jquery');

/**
 * holds "private" functions or utility methods
 * that don't need to be on the prototype
 */
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
  },

  /**
   * creates input for board
   * @return DOMNode
   */
  createInput: function () {
    var $input = $(document.createElement('input'));
    $input.attr('type', 'text');
    $input.attr('maxlength', '1');
    $input.attr('pattern', '[0-9]*');
    return $input;
  }

};
