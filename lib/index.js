'use strict';

var searchLinkGenerators = require('./search-link-generators');

hexo.extend.tag.register('search', function (args) {
    var searchEngineName = getDefaultSearchEngineName();
    return generateSearchLink(searchEngineName, args, null);
});

hexo.extend.tag.register('search_with', function (args) {
    var searchEngineName = getDefaultSearchEngineName();
    if (args[0]) {
        searchEngineName = args[0];
    }
    return generateSearchLink(searchEngineName, args.slice(1), null);
});

hexo.extend.tag.register('search_alt', function (args, content) {
    var searchEngineName = getDefaultSearchEngineName();
    return generateSearchLink(searchEngineName, args, content);
}, { ends: true });

hexo.extend.tag.register('search_alt_with', function (args, content) {
    var searchEngineName = getDefaultSearchEngineName();
    if (args[0]) {
        searchEngineName = args[0];
    }
    return generateSearchLink(searchEngineName, args.slice(1), content);
}, { ends: true });

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

function generateSearchLink(searchEngineName, args, content) {
    var linkContent = content ? content : args[0];

    var searchLinkGenerator = searchLinkGenerators[searchEngineName];
    if (!searchLinkGenerator) {
        return content;
    }

    return searchLinkGenerator(args, linkContent);
}

