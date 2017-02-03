'use strict';

module.exports = function (args) {
    return [ '<a href="https://github.com/', args[0], '/', args[1], '/search?q=', args[2], '" target="_blank">', args[2], "</a>" ].join('');
}

