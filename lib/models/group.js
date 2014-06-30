'use strict';

var oop     = require('oop-utils');
var Base    = require('./lib/base.js');

module.exports = function(api) {
    /**
     * A group in flocks
     *
     * @constructor
     * @extends {Base}
     * @param {Object} data
     * @param {Object} options
     */
    function Group(data, options) {
        Base.call(this, api, data, options);
    }

    api.model('group', Group);
    var proto = oop.inherits(Group, Base);

    proto.urlRoot = '/groups';

    api.after(function() {
        proto.mapping = {
            id: { key: 'id' },
            name: { key: 'name' },
            category: { key: 'category' },
            members: { key: 'people', model: api.collection('members') },
            ancestors: { key: 'ancestors', model: api.collection('groups') },
            descendants: {
                key: 'descendants', model: api.collection('groups')
            },
            leader: { key: 'leader' },
            primary: { key: 'primary' }
        };
    });
};
