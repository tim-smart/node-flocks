'use strict';

var oop     = require('oop-utils');
var Base    = require('./base.js');
var Members = require('../collections/members.js');

/**
 * A group in flocks
 *
 * @constructor
 * @extends {Base}
 * @param {Object} data
 */
function Group(data) {
    this.members = new Members();

    if (data && data.people) {
        this.members.set(data.people);
    }
    this.on('change:people', function(model, value) {
        this.members.set(value);
    });

    Base.apply(this, arguments);
}

module.exports = Group;
var proto = oop.inherits(Group, Base);

proto.urlRoot = '/groups';
