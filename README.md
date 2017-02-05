# hexo-tag-search-link

[![npm version](https://badge.fury.io/js/hexo-tag-search-link.svg)](http://badge.fury.io/js/hexo-tag-search-link)

A hexo tag plugin for creating search links with specified search engine and content.

## Installation

``` bash
$ npm install hexo-tag-search-link --save
```

## Usage

To search the content, we can use search tag, which uses the default search engine, and search_with tag, which uses the specified search engine. Here are some examples:

With default search engine:
```
{% search "Hello World" %}
```

With specified search engine:
```
{% search_with google "Hello World" %}
{% search_with bing "Hello World" %}
{% search_with baidu "Hello World" %}
{% search_with yahoo "Hello World" %}
{% search_with wiki "Hello World" %}
{% search_with wiki "你好，世界" zh %}
{% search_with msdn "Hello World" %}
{% search_with github "Hello World" %}
{% search_with github_code generateSearchLink r12f/hexo-tag-search-link %}
```

We can also specify what to show with search_alt and search_alt_with tags. The tag works almost exactly the same. The only difference is that they have an end tag. Here are 2 examples:

With alternated things to show:
```
{% search_alt "Hello World (maybe not)" %}Hello World{% endsearch_alt %}
```

With specified search engine and alternated things to show:
```
{% search_alt_with google "Hello World (maybe not)" %}Hello World{% endsearch_alt_with %}
```

Config:
```
# Search link
search_link:
    default_engine: google
```

## License

BSD v3
