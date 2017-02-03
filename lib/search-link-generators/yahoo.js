'use strict';

module.exports = function (args) {
    return [ '<a href="https://search.yahoo.com/search?p=', args[0], '" target="_blank">', args[0], "</a>" ].join('');
}
