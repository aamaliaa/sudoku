var $ = require('jquery');

var Sudoku = module.exports = function (boardId) {

  this.$board = $('#' + boardId);
  this.game = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];

  this.createInput = function () {
    var $input = $(document.createElement('input'));
    $input.attr('type', 'text');
    $input.attr('maxlength', '1');
    return $input;
  };

  return this;

};

Sudoku.prototype = {

  /**
   * Renders board cells and inputs
   */
  render: function () {
    var i, j, k, l, $square, $cell, $input, value;
    var $board = this.$board;
    var squares = [ [], [], [] ];

    for (i = 0; i < 9; i++) {
      for (j = 0; j < 9; j++) {
        k = Math.floor( i / 3);
        l = Math.floor( j / 3 );

        if (!squares[k][l]) {
          squares[k][l] = $(document.createElement('div')).addClass('square');
        }

        value = this.game[i][j];
        $input = this.createInput();

        if (value === 0) {
          // create empty input with handlers
          $cell = $(document.createElement('div'));
          $cell.append($input);
        } else {
          // create static number
          $cell = $(document.createElement('div'));
          $cell.text(value);
        }

        $cell.addClass('cell');
        $cell.data('row', i);
        $cell.data('col', j);
        squares[k][l].append($cell);
      }
    }

    squares.forEach(function(el) {
      $board.append(el);
    });
  }

};
