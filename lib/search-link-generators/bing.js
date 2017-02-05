'use strict';

module.exports = function (args, content) {
    return [ '<a href="https://www.bing.com/search?q=', args[0], '" target="_blank">', content, "</a>" ].join('');
}
