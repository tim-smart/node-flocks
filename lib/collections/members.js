'use strict';

var Collection = require('backbone').Collection;
var Member     = require('../models/member.js');
var oop        = require('oop-utils');

/**
 * Members flocks collection
 *
 * @constructor
 * @extends {Collection}
 */
function Members() {
    Collection.apply(this, arguments);
}

module.exports = Members;
var proto = oop.inherits(Members, Collection);

// Model
proto.model = Member;
