'use strict';

var Model   = require('backbone').Model;
var oop     = require('oop-utils');
var _       = require('underscore');

/**
 * The flocks base model, with the sync method over-ridden
 *
 * @constructor
 * @extends {Model}
 */
function Base() {
    Model.apply(this, arguments);
}

module.exports = Base;
var proto = oop.inherits(Base, Model);

/**
 * Fetch with api argument
 *
 * @param {Object} api
 * @optional @param {Object} options
 * @return {Base}
 */
proto.fetch = function fetch(api, options) {
    options = options || {};
    _.defaults(options, api);
    return Model.prototype.fetch.call(this, options);
};
