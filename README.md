
# webpack-external-react

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][david-image]][david-url] [![devDependency Status][david-image-dev]][david-url-dev]

Webpack config helpers to exclude react from bundle and load it from external script (via CDN).

[repo-url]: https://github.com/mchalapuk/webpack-external-react
[travis-url]: http://travis-ci.org/mchalapuk/webpack-external-react
[travis-image]: https://secure.travis-ci.org/mchalapuk/webpack-external-react.png?branch=master
[david-url]: https://david-dm.org/mchalapuk/webpack-external-react
[david-image]: https://david-dm.org/mchalapuk/webpack-external-react.svg
[david-url-dev]: https://david-dm.org/mchalapuk/webpack-external-react?type=dev
[david-image-dev]: https://david-dm.org/mchalapuk/webpack-external-react/dev-status.svg
[npm-url]: https://npmjs.org/package/webpack-external-react
[npm-image]: https://badge.fury.io/js/webpack-external-react.svg

## Installation

```shell
npm install --save-dev webpack-external-react
```

## Loading

```javascript
const externalReact = require('webpack-external-react');
```

## Usage

```javascript
// in webpack config
module.exports = {
  ...

  externals: externalReact.externals,

  module: {
    noParse: externalReact.noParse,

    ...
  },
}
```

## License

Copyright &copy; 2017 - 2019 Maciej Chałapuk.
Released under [MIT License](LICENSE).

