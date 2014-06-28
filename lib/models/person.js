'use strict';

var oop  = require('oop-utils');
var Base = require('./base.js');
var Groups = require('../collections/groups.js');

/**
 * A person in flocks
 *
 * @constructor
 * @extends {Base}
 * @param {Object} data
 */
function Person(data) {
    this.groups = new Groups();

    if (data.groups) {
        this.groups.set(data);
    }
    this.on('change:groups', function() {
        this.groups.set(this.get('groups'));
    });

    Base.apply(this, arguments);
}

module.exports = Person;
var proto = oop.inherits(Person, Base);

// URL root
proto.urlRoot = '/people';
