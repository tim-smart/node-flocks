'use strict';

var oop  = require('oop-utils');
var Personish = require('./lib/personish.js');

module.exports = function(api) {
    /**
     * A member of a group
     *
     * @constructor
     * @extends {Personish}
     * @param {Object} data
     * @param {Object} options
     */
    function Member(data, options) {
        Personish.call(this, api, data, options);
    }

    api.model('member', Member);
    var proto = oop.inherits(Member, Personish);

    // Mapping
    api.after(function() {
        proto.mapping = {
            id: { key: 'person_id' },
            leader: { key: 'leader' },
            primary: { key: 'primary' }
        };
    });
};
