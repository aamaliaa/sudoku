var $ = require('jquery');

/**
 * holds "private" functions or utility methods
 */
module.exports = {

  /**
   * creates input for board
   * @return {DOMNode}
   */
  createInput: function () {
    var $input = $(document.createElement('input'));
    $input.attr('type', 'text');
    $input.attr('maxlength', '1');
    $input.attr('pattern', '[0-9]*');
    return $input;
  },

  /**
   * creates buttons for UI
   * @return {DOMNode}
   */
  createButtons: function () {
    var $buttons = $('<div class="controls" />');
    $buttons.append('<button id="check" class="btn btn-blue">get hints</button>');
    $buttons.append('<button id="solve" class="btn">solve game</button>');
    $buttons.append('<button id="reset" class="btn btn-red" type="reset">reset game</button>');
    return $buttons;
  }

};
