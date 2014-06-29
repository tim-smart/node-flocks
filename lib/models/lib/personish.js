'use strict';

var Base = require('./base.js');
var oop  = require('oop-utils');

/**
 * A parent constructor for person-ish models
 *
 * @constructor
 * @extends {Base}
 * @param {FlocksApiRegistry} api
 * @param {Object} attrs
 * @param {Object} options
 */
function Personish(api, attrs, options) {
    Base.call(this, api, attrs, options);
}

module.exports = Personish;
var proto = oop.inherits(Personish, Base);

/**
 * Fetch a person
 *
 * @param {Object} options
 */
proto.person = function person(options) {
    var Person = this.api.model('person');
    var p = new Person({ id: this.id });
    return p.fetch(options);
};
