'use strict';

var oop  = require('oop-utils');
var Personish = require('./lib/personish.js');

module.exports = function(api) {
    /**
     * A relationship
     *
     * @constructor
     * @extends {Personish}
     * @param {Object} data
     * @param {Object} options
     */
    function Relationship(data, options) {
        Personish.call(this, api, data, options);
    }

    api.model('relationship', Relationship);
    var proto = oop.inherits(Relationship, Personish);

    // Mapping
    api.after(function() {
        proto.mapping = {
            id: { key: 'relation_id' },
            type: { key: 'relationship_type' }
        };
    });
};
