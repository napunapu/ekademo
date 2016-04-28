'use strict';

module.exports = function () {
    var importantPrivateCounterVariable = 0;

    return {
        sum: function (a, b) {
            importantPrivateCounterVariable++;
            return a + b;
        },

        getCallCount: function () {
            return importantPrivateCounterVariable;
        }
    }
};