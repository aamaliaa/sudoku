var $ = require('jquery');
var should = require('should');
var Sudoku = require('../src/js/sudoku');

describe('Sudoku', function () {
  var sudoku;

  beforeEach(function (done) {
    // initialize html
    $('#board').css('display', 'none');
    $('#board').html('');

    // init board
    sudoku = new Sudoku('board');
    done();
  });

  describe('Construct', function () {

    it('should render sudoku board', function (done) {
      should.exist(sudoku);
      $('.square').length.should.equal(9);
      $('.cell').length.should.equal(81);

      done();
    });

  });

  describe('Get/Set', function () {

    it('should get a correct cell value', function (done) {
      var value = sudoku.getCellValue(0, 0);
      value.should.equal(5);
      done();
    });

    it('should set a cell value', function (done) {
      var value = sudoku.getCellValue(0, 2);
      var newValue = 4;

      sudoku.setCellValue(newValue, 0, 2);
      newValue.should.equal(sudoku.getCellValue(0, 2));

      // setting value back
      sudoku.setCellValue(value, 0, 2);

      done();
    });

    it('should get square range given row and column', function (done) {
      var square = sudoku.getSquareRange(5, 8);

      square.row.start.should.equal(3);
      square.row.end.should.equal(6);

      square.col.start.should.equal(6);
      square.col.end.should.equal(9);

      done();
    });

  });

  describe('Validation', function () {

    describe('row', function () {

      it('should return true if value can be placed in row', function (done) {
        sudoku.checkRow(4, 0).should.be.true();
        done();
      });

      it('should return false if value cannot be placed in row', function (done) {
        sudoku.checkRow(5, 0).should.be.false();
        done();
      });

    });

    describe('column', function () {

      it('should return true if value can be placed in column', function (done) {
        sudoku.checkColumn(3, 7).should.be.true();
        done();
      });

      it('should return false if value cannot be placed in column', function (done) {
        sudoku.checkColumn(8, 4).should.be.false();
        done();
      });

    });

    describe('square', function () {

      it('should return true if value can be placed in square', function (done) {
        sudoku.checkSquare(4, 1, 1).should.be.true();
        done();
      });

      it('should return false if value cannot be placed in square', function (done) {
        sudoku.checkSquare(4, 4, 1).should.be.false();
        done();
      });

    });

    describe('answer', function () {

      it('should return true if value is placed correctly', function (done) {
        sudoku.checkAnswer(4, 0, 2).should.be.true();
        done();
      });

      it('should return false if value is placed incorrectly', function (done) {
        sudoku.checkAnswer(3, 1, 1).should.be.false();
        done();
      });

    });

  });

});
