'use strict';

function index(obj, key) {
    return obj[key];
}

exports.dotNotation = function dotNotation(obj, str) {
    return str.split('.').reduce(index, obj);
};
