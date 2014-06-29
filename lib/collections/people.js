'use strict';

var Base = require('./lib/base.js');
var oop  = require('oop-utils');

/**
 * Search and create collection
 *
 * @param {String} query
 * @param {Object} options
 * @return {People}
 */
function searchAndCreate(query, options) {
    /* jshint validthis:true */
    var People = this;
    var people = new People();
    people.search(query, options);
    return people;
}

/**
 * Search for people
 *
 * @param {String} query
 * @param {Object} options
 * @return {People}
 */
function search(query, options) {
    /* jshint validthis:true */
    options = options || {};
    options.search = query;

    this.fetch(options);
    return this;
}

module.exports = function(api) {
    /**
     * People flocks collection
     *
     * @constructor
     * @extends {Base}
     * @param {Object} data
     * @param {Object} options
     */
    function People(data, options) {
        Base.call(this, api, data, options);
    }

    api.collection('people', People);
    var proto = oop.inherits(People, Base);

    // URL
    proto.url = '/people';

    // Model
    proto.model = api.model('person');

    // Methods
    People.search = searchAndCreate;
    proto.search = search;
};
