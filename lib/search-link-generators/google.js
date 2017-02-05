'use strict';

module.exports = function (args, content) {
    return [ '<a href="https://www.google.com/search?q=', args[0], '" target="_blank">', content, "</a>" ].join('');
}
