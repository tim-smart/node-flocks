'use strict';

var Collection = require('backbone').Collection;
var oop        = require('oop-utils');

module.exports = function(api) {
    /**
     * Relationships flocks collection
     *
     * @constructor
     * @extends {Collection}
     */
    function Relationships() {
        Collection.apply(this, arguments);
    }

    api.collection('relationships', Relationships);
    var proto = oop.inherits(Relationships, Collection);

    // Model
    proto.model = api.model('relationship');
};
