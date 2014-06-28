'use strict';

var oop  = require('oop-utils');
var Base = require('./base.js');

/**
 * A group in flocks
 *
 * @constructor
 * @extends {Base}
 */
function Group() {
    Base.apply(this, arguments);
}

module.exports = Group;
var proto = oop.inherits(Group, Base);

proto.urlRoot = '/groups';
