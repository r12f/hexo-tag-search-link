'use strict';

module.exports = function (args, content) {
    var lang = args[1] ? args[1] : 'en';
    return [ '<a href="https://' + lang + '.wikipedia.org/wiki/', args[0], '" target="_blank">', content, "</a>" ].join('');
}

