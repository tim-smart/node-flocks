'use strict';

var Group = require('../models/group.js');
var Base = require('./base.js');
var oop  = require('oop-utils');

/**
 * Groups flocks collection
 *
 * @constructor
 * @extends {Base}
 */
function Groups() {
    Base.apply(this, arguments);
}

module.exports = Groups;
var proto = oop.inherits(Groups, Base);

// URL
proto.url = '/groups';

// Model
proto.model = Group;
