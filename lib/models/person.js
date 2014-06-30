'use strict';

var oop  = require('oop-utils');
var Base = require('./lib/base.js');

module.exports = function(api) {
    /**
     * A person in flocks
     *
     * @constructor
     * @extends {Base}
     * @param {Object} data
     * @param {Object} options
     */
    function Person(data, options) {
        Base.call(this, api, data, options);
    }

    api.model('person', Person);
    var proto = oop.inherits(Person, Base);

    // URL root
    proto.urlRoot = '/people';

    // Mapping
    api.after(function() {
        proto.mapping = {
            id: { key: 'id' },
            email: { key: 'email' },
            firstName: { key: 'first_name' },
            lastName: { key: 'last_name' },
            gender: { key: 'gender' },
            mobile: { key: 'mobile_tel' },
            groups: { key: 'groups', model: api.collection('groups') },
            relationships: {
                key: 'relationships',
                model: api.collection('relationships')
            }
        };
    });
};
