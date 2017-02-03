'use strict';

module.exports = function (args) {
    return [ '<a href="https://social.msdn.microsoft.com/Search/en-US?query=', args[0], '" target="_blank">', args[0], "</a>" ].join('');
}
