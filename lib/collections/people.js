'use strict';

var Base   = require('./base.js');
var Person = require('../models/person.js');
var oop    = require('oop-utils');

/**
 * People flocks collection
 *
 * @constructor
 * @extends {Base}
 */
function People() {
    Base.apply(this, arguments);
}

module.exports = People;
var proto = oop.inherits(People, Base);

// URL
proto.url = '/people';

// Model
proto.model = Person;

/**
 * Search for people
 *
 * @param {Object} api
 * @param {String} query
 * @param {Object} options
 * @return {People}
 */
proto.search = function search(api, query, options) {
    options = options || {};
    options.search = query;

    return this.fetch(api, options);
};
