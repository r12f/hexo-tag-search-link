'use strict';

module.exports = function (args) {
    return [ '<a href="https://github.com/search?q=', args[0], '" target="_blank">', args[0], "</a>" ].join('');
}

