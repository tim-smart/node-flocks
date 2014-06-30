'use strict';

var Model = require('backbone').Model;
var oop   = require('oop-utils');
var _     = require('underscore');

/**
 * The flocks base model, with the sync method over-ridden
 *
 * @constructor
 * @extends {Model}
 * @param {FlocksApiRegistry} api
 * @param {Object} attrs
 * @param {Object} options
 */
function Base(api, attrs, options) {
    Model.call(this, attrs, options);

    this.api = api;
}

module.exports = Base;
var proto = oop.inherits(Base, Model);

/**
 * Add in mapping magic to toJSON
 *
 * @return {Object}
 */
proto.toJSON = function toJSON() {
    var self = this;

    if (!self.mapping) {
        return _.clone(self.attributes);
    }

    var out = {};

    Object.keys(self.mapping).forEach(function(attrKey) {
        var mapping = self.mapping[attrKey];
        var dataKey = mapping.key;
        var value   = self.attributes[attrKey];

        if (!value) {
            return;
        }
        if (mapping.model) {
            value = value.toJSON();
        }

        out[dataKey] = value;
    });

    return out;
};

/**
 * Mapping magic to parse
 *
 * @param {Object} data
 * @return {Object}
 */
proto.parse = function parse(data) {
    var self = this;

    if (!self.mapping) {
        return data;
    }

    var out = {};

    Object.keys(self.mapping).forEach(function(attrKey) {
        var mapping = self.mapping[attrKey];
        var dataKey = mapping.key;
        var value   = data[dataKey];

        if (!value) {
            return;
        }
        if (mapping.model) {
            value = new mapping.model(value);
        }

        out[attrKey] = value;
    });

    return out;
};

/**
 * Add api options to sync options
 *
 * @param {String} method
 * @param {Model} model
 * @param {Object} options
 */
proto.sync = function sync(method, model, options) {
    _.defaults(options, this.api.options);
    return Model.prototype.sync.call(this, method, model, options);
};
