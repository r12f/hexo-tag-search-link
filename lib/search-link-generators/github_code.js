'use strict';

module.exports = function (args, content) {
    return [ '<a href="https://github.com/', args[1], '/search?q=', args[0], '" target="_blank">', content, "</a>" ].join('');
}

