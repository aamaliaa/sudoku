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

  this.createInput = function () {
    var $input = $(document.createElement('input'));
    $input.attr('type', 'text');
    $input.attr('maxlength', '1');
    $input.attr('pattern', '[0-9]*');
    return $input;
  };

  return this;

};

Sudoku.prototype = {

  /**
   * Renders board cells and inputs
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

        value = this.game[i][j];
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

    // setup event listeners
    this.setupEventListeners();
  },

  setupEventListeners: function () {
    var self = this;

    $('.editable input').on('keyup', function (e) {
      self.checkAnswer(e.currentTarget);
    });

  },

  checkAnswer: function (target) {
    var val = parseInt(target.value, 10);
    var $cell = $(target).closest('.cell');
    var row = $cell.data('row');
    var col = $cell.data('col');

    // validate and check answer to solution board
    if (/^[1-9]$/.test(val) && val === this.gameSolution[row][col]) {

      $cell.html('');
      $cell.text(val)
        .removeClass('editable')
        .removeClass('wrong')
        .addClass('verified');

    } else {
      this.clearCell($cell);
    }

  },

  clearCell: function ($cell) {
    $cell
      .addClass('wrong')
      .delay(1000)
      .queue(function () {
        $(this).find('input').val('')
        $(this)
          .removeClass('wrong')
          .dequeue();
      });
  }

};
