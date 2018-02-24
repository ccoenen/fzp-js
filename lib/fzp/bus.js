'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * FZP Bus class
 */
var FZPBus = function () {
  /**
   * FZPBus constructor
   * @param {Object} opt
   */
  function FZPBus(opt) {
    _classCallCheck(this, FZPBus);

    opt = opt || {};

    /**
     * Store the FZP bus id
     * @type {String}
     */
    this.id = opt.id || '';

    /**
     * Store the FZP node members as an array
     * @type {Array}
     */
    this.nodeMembers = opt.nodeMembers || [];
  }

  /**
   * Set the FZP bus id
   * @param {String} id
   */


  _createClass(FZPBus, [{
    key: 'setid',
    value: function setid(id) {
      this.id = id;
    }

    /**
     * add a new node member if not exist
     * @param {String} m
     */

  }, {
    key: 'addModeMember',
    value: function addModeMember(m) {
      if (!this.existModeMember(m)) {
        this.nodeMembers.push(m);
      }
    }

    /**
     * check if the given node member name does not exist at the nodeMembers array
     * @param {String} m
     * @return {Boolean}
     */

  }, {
    key: 'existModeMember',
    value: function existModeMember(m) {
      for (var i = 0; i < this.nodeMembers.length; i++) {
        if (this.nodeMembers[i] === m) {
          return true;
        }
      }
      return false;
    }
  }]);

  return FZPBus;
}();

module.exports = FZPBus;