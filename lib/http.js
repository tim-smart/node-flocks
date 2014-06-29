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
    if (!options.apiUrl || !options.apiKey) {
        throw new Error('API details missing for HTTP request');
    }

    options.url = options.apiUrl + options.url;
    options.query = options.query || {};
    _.defaults(options.query, {
        'api_key': options.apiKey
    });
    var headers = {};

    if (options.contentType) {
        headers['Content-Type'] = options.contentType;
    }

    request({
        method: options.method,
        url: options.url,
        headers: headers,
        qs: options.query,
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
