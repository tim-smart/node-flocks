'use strict';

var Collection = require('backbone').Collection;
var oop        = require('oop-utils');
var _          = require('underscore');

/**
 * Base flocks collection
 *
 * @constructor
 * @extends {Collection}
 */
function Base() {
    Collection.apply(this, arguments);
}

module.exports = Base;
var proto = oop.inherits(Base, Collection);

/**
 * API fetch
 *
 * @param {Object} api
 * @optional @param {Object} options
 * @return {Base}
 */
proto.fetch = function fetch(api, options) {
    options = options || {};
    _.defaults(options, api);
    return Collection.prototype.fetch.call(this, options);
};
