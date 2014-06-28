'use strict';

var oop  = require('oop-utils');
var Model = require('backbone').Model;
var Person = require('./person.js');

/**
 * A group member in flocks
 *
 * @constructor
 * @extends {Model}
 */
function Member() {
    Model.apply(this, arguments);
}

module.exports = Member;
var proto = oop.inherits(Member, Model);

// ID attribute
proto.idAttribute = 'person_id';

/**
 * Get the associated person
 *
 * @param {Object} api
 * @param {Object} options
 * @return {Member}
 */
proto.fetchPerson = function fetchPerson(api, options) {
    var person = new Person({ id: this.id });

    person.fetch(api, options);

    return this;
};
