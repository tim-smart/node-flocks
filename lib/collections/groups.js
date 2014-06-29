'use strict';

var Collection = require('backbone').Collection;
var oop        = require('oop-utils');

module.exports = function(api) {
    /**
     * Groups flocks collection
     *
     * @constructor
     * @extends {Collection}
     */
    function Groups() {
        Collection.apply(this, arguments);
    }

    api.collection('groups', Groups);
    var proto = oop.inherits(Groups, Collection);

    // URL
    proto.url = '/groups';

    // Model
    proto.model = api.model('group');
};
