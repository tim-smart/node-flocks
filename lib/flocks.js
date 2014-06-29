'use strict';

var _     = require('underscore');
var mfs   = require('fs');
var mpath = require('path');
require('./http.js');

/**
 * Api registry
 *
 * @constructor
 * @param {Object} options
 */
function FlocksApiRegistry(options) {
    this.models = {};
    this.collections = {};
    this.options = options || {};
    this.fns = [];

    _.defaults(this.options, {
        apiUrl: 'https://flocks.arisechurch.org.nz/api/v1'
    });
}

var proto = FlocksApiRegistry.prototype;

/**
 * Register a model
 *
 * @param {String} name
 * @optional @param {Model} constructor
 * @return {Model}
 */
proto.model = function model(name, constructor) {
    if (constructor) {
        this.models[name] = constructor;
    } else {
        constructor = this.models[name];
    }

    return constructor;
};

/**
 * Register a collection
 *
 * @param {String} name
 * @optional @param {Model} constructor
 * @return {Model}
 */
proto.collection = function collection(name, constructor) {
    if (constructor) {
        this.collections[name] = constructor;
    } else {
        constructor = this.collections[name];
    }

    return constructor;
};

/**
 * After everything is loaded
 *
 * @optional @param {Function} fn
 * @return {FlocksApiRegistry}
 */
proto.after = function after(fn) {
    if (!fn) {
        this.fns.forEach(function(fn) {
            fn();
        });

        return this;
    }

    this.fns.push(fn);

    return this;
};

// ====

exports.createApi = function(options) {
    var registry = new FlocksApiRegistry(options);

    function parseDir(directory) {
        var absolute = __dirname + '/' + directory;

        var models = mfs.readdirSync(absolute);

        models.forEach(eachModel);
        function eachModel(model) {
            if ('.js' !== mpath.extname(model)) {
                return;
            }

            require('./' + directory + '/' + model)(registry);
        }
    }

    parseDir('models');
    parseDir('collections');

    registry.after();

    return registry;
};
