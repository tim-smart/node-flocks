'use strict';

var bb      = require('backbone');
var request = require('request');
var _       = require('underscore');

/**
 * Process a request
 *
 * @param {Object} options
 * @return {Model}
 */
bb.ajax = function ajax(options) {
    options.url = options.apiUrl + options.url;
    var query = {
        'api_key': options.apiKey
    };
    var headers = {};

    if (options.search) {
        query.q = options.search;
        options.url += '/search';
    }

    if (options.contentType) {
        headers['Content-Type'] = options.contentType;
    }

    request({
        method: options.method,
        url: options.url,
        headers: headers,
        qs: query,
        body: options.data,
        json: true
    }, function(error, res, data) {
        if (error) {
            options.error(error);
            return;
        } else if (300 <= res.statusCode) {
            options.error(new Error(res.statusCode + ' HTTP response'));
            return;
        }

        options.success(data);
    });

    return this;
};

// ====

/**
 * Create api options object
 *
 * @param {Object} options
 * @return {Object}
 */
module.exports.createApi = function(options) {
    _.defaults(options, {
        apiUrl: 'https://flocks.arisechurch.org.nz/api/v1'
    });

    return options;
};

// Export models and collections
module.exports.Person = require('./models/person.js');
module.exports.Group  = require('./models/group.js');
module.exports.People = require('./collections/people.js');
