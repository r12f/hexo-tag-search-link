'use strict';

module.exports = function (args, content) {
    return [ '<a href="https://search.yahoo.com/search?p=', args[0], '" target="_blank">', content, "</a>" ].join('');
}
