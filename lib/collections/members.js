'use strict';

var Collection = require('backbone').Collection;
var oop        = require('oop-utils');

module.exports = function(api) {
    /**
     * Members flocks collection
     *
     * @constructor
     * @extends {Collection}
     */
    function Members() {
        Collection.apply(this, arguments);
    }

    api.collection('members', Members);
    var proto = oop.inherits(Members, Collection);

    // Model
    proto.model = api.model('member');
};
