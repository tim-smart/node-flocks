'use strict';

var Collection = require('backbone').Collection;
var oop        = require('oop-utils');
var _          = require('underscore');

/**
 * Base collection
 *
 * @constructor
 * @extends {Collection}
 * @param {FlocksApiRegistry} api
 * @param {Object} data
 * @param {Object} options
 */
function Base(api, data, options) {
    this.api = api;
    Collection.call(this, data, options);
}

module.exports = Base;
var proto = oop.inherits(Base, Collection);

/**
 * Add api options to sync options
 *
 * @param {String} method
 * @param {Model} model
 * @param {Object} options
 */
proto.sync = function sync(method, model, options) {
    _.defaults(options, this.api.options);
    return Collection.prototype.sync.call(this, method, model, options);
};
