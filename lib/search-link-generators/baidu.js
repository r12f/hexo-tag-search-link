'use strict';

module.exports = function (args) {
    return [ '<a href="http://www.baidu.com/s?wd=', args[0], '" target="_blank">', args[0], "</a>" ].join('');
}

