var $ = require('jquery');
var utils = require('./utils');

var Sudoku = module.exports = function (boardId) {

  this.$board = $('#' + boardId);

  // hard-coded game and solution
  // TODO a generator should generate these 2 arrays
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

  this.gameSolution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];

  this.currentGame = null;

  this.emptyBoard = utils.getEmptyBoard();

  this.createInput = function () {
    var $input = $(document.createElement('input'));
    $input.attr('type', 'text');
    $input.attr('maxlength', '1');
    $input.attr('pattern', '[0-9]*');
    return $input;
  };

  // render on construct
  this.init();

  return this;
};

Sudoku.prototype = {

  /**
   * inits current game state,
   * renders,
   * sets up event listeners
   */
  init: function () {
    // clone game to current game
    this.setCurrentGame();

    // renders UI
    this.render();

    // setup event listeners
    this.addEventListeners();
  },

  /**
   * renders board cells and inputs
   */
  render: function () {
    var i, j, k, l, $square, $cell, $input, value, cellClass;
    var $board = this.$board;
    var squares = [ [], [], [] ];

    for (i = 0; i < 9; i++) {
      for (j = 0; j < 9; j++) {
        k = Math.floor( i / 3);
        l = Math.floor( j / 3 );

        if (!squares[k][l]) {
          squares[k][l] = $(document.createElement('div')).addClass('square');
        }

        value = this.currentGame[i][j];
        $input = this.createInput();

        if (value === 0) {
          // create empty input
          $cell = $(document.createElement('div'));
          $cell.append($input);
          cellClass = 'editable';
        } else {
          // create static number
          $cell = $(document.createElement('div'));
          $cell.text(value);
          cellClass = '';
        }

        $cell.addClass('cell').addClass(cellClass);
        $cell.data('row', i);
        $cell.data('col', j);
        squares[k][l].append($cell);
      }
    }

    squares.forEach(function(el) {
      $board.append(el);
    });
  },

  /**
   * clones game board to store state
   */
  setCurrentGame: function () {
    // this uses $.extend() to deep copy bc we don't want a reference
    this.currentGame = $.extend(true, [], this.game.slice(0));
  },

  /**
   * sets current game to empty game
   */
  clearCurrentGame: function () {
    this.currentGame = this.emptyBoard.slice(0);
  },

  /**
   * adds UI event listeners
   */
  addEventListeners: function () {
    var self = this;

    $('.editable input').on('keyup', function (e) {
      self.checkInput(e.currentTarget);
    });

    $('#reset').on('click', function (e) {
      self.reset();
    });

  },

  /**
   * removes UI event listeners
   */
  removeEventListeners: function () {
    $('.editable input').off('keyup');
    $('#reset').off('click');
  },

  /**
   * gets cell value from current game board
   * @param  int row  row index
   * @param  int col  column index
   * @return int      cell value
   */
  getCellValue: function (row, col) {
    return this.currentGame[row][col];
  },

  /**
   * sets cell value on current game board
   * @param int inputVal  input value
   * @param int row       row index
   * @param int col       column index
   */
  setCellValue: function (inputVal, row, col) {
    this.currentGame[row][col] = inputVal;
  },

  /**
   * gets the square index range of a cell
   * (there are 9 squares, and each "square" contains 9 cells)
   * @param  int row  row index
   * @param  int col  column index
   * @return object   object with square index ranges
   * (i.e. { row: { start: 0, end: 3 }, col: { start: 6, end: 9 });
   */
  getSquareRange: function (row, col) {
    var r = Math.floor(row / 3) * 3;
    var c = Math.floor(col / 3) * 3;

    return {
      row: {
        start: r,
        end: r + 3,
      },
      col: {
        start: c,
        end: c + 3
      }
    };
  },

  /**
   * validates if value can be placed in a row
   * (i.e. if value does not already exist in the row)
   * @param  int inputVal input value
   * @param  int row      row index
   * @return bool         true for valid, false for invalid
   */
  checkRow: function (inputVal, row) {

    var i;

    for (i = 0; i < 9; i++) {
      if (inputVal === this.currentGame[row][i]) {
        return false;
      }
    }

    return true;

  },

  /**
   * validates if value can be placed in a column
   * @param  int inputVal input value
   * @param  int square   column index
   * @return bool         true for valid, false for invalid
   */
  checkColumn: function (inputVal, col) {

    var i;

    for (i = 0; i < 9; i++) {
      if (inputVal === this.currentGame[i][col]) {
        return false
      }
    }

    return true;

  },

  /**
   * checks if value can be placed in a square
   * @param  int inputVal input value
   * @param  int row      row index
   * @param  int col      column index
   * @return bool         true for valid, false for invalid
   */
  checkSquare: function (inputVal, row, col) {

    var i, j;
    var square = this.getSquareRange(row, col);

    for (i = square.row.start; i < square.row.end; i++) {
      for (j = square.col.start; j < square.col.end; j++) {
        if (inputVal === this.currentGame[i][j]) {
          return false;
        }
      }
    }

    return true;

  },

  /**
   * checks validity of cell input
   * @param  element target the changed input
   */
  checkInput: function (target) {
    var val = parseInt(target.value, 10);
    var $cell = $(target).closest('.cell');
    var row = $cell.data('row');
    var col = $cell.data('col');

    // validate and check answer to solution board
    if (
      /^[1-9]$/.test(val) &&
      this.checkRow(val, row) &&
      this.checkColumn(val, col) &&
      this.checkSquare(val, row, col)
    ) {

      // if answer is validated, set cell value
      this.setCellValue(val, row, col);

    } else {

      // set cell value to 0
      this.setCellValue(0, row, col);

      // clear cell input
      this.clearInput($cell);

    }

  },

  /**
   * checks answer against game solution board
   * @param  int val inputted value
   * @param  int row row index
   * @param  int col column index
   * @return bool    true if correct, false if incorrect
   */
  checkAnswer: function (val, row, col) {
    return (val === this.gameSolution[row][col]);
  },

  /**
   * clears cell's input element
   * @param  element $cell  cell element
   */
  clearInput: function ($cell) {
    $cell
      .addClass('wrong')
      .delay(1000)
      .queue(function () {
        $(this).find('input').val('')
        $(this)
          .removeClass('wrong')
          .dequeue();
      });
  },

  /**
   * resets board
   */
  reset: function () {
    // clear html
    this.$board.html('');

    // clear current game
    this.clearCurrentGame();

    // remove event listeners
    this.removeEventListeners();

    // init
    this.init();
  }

};
