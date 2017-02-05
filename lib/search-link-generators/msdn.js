'use strict';

module.exports = function (args, content) {
    return [ '<a href="https://social.msdn.microsoft.com/Search/en-US?query=', args[0], '" target="_blank">', content, "</a>" ].join('');
}
