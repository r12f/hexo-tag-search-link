'use strict';

var searchLinkGenerators = require('./search-link-generators');

hexo.extend.tag.register('search', function (args) {
    var searchEngineName = getDefaultSearchEngineName();
    return generateSearchLink(searchEngineName, args);
});

hexo.extend.tag.register('search_with', function (args) {
    var searchEngineName = getDefaultSearchEngineName();
    if (args[0]) {
        searchEngineName = args[0];
    }
    return generateSearchLink(searchEngineName, args.slice(1));
});

function getDefaultSearchEngineName() {
    var searchEngineName = null;

    var searchLinkConfig = hexo.config.search_link;
    if (searchLinkConfig) {
        searchEngineName = searchLinkConfig.default_engine;
    }

    if (!searchEngineName) {
        searchEngineName = "google";
    }

    return searchEngineName;
}

function generateSearchLink(searchEngineName, args) {
    var searchLinkGenerator = searchLinkGenerators[searchEngineName];
    if (!searchLinkGenerator) {
        return args[0];
    }
    return searchLinkGenerator(args);
}

