'use strict';

module.exports = function (args) {
    return [ '<a href="https://en.wikipedia.org/wiki/', args[0], '" target="_blank">', args[0], "</a>" ].join('');
}

