'use strict';

module.exports = function (args, content) {
    return [ '<a href="http://www.baidu.com/s?wd=', args[0], '" target="_blank">', content, "</a>" ].join('');
}

