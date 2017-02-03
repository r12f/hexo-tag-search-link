'use strict';

var searchEngineNames = ['google', 'bing', 'yahoo', 'baidu', 'wiki', 'github', 'github_code', 'msdn'];

var contentGenerator = {};
searchEngineNames.forEach(function (searchEngineName) {
    contentGenerator[searchEngineName] = require('./' + searchEngineName);
});

module.exports = contentGenerator;
