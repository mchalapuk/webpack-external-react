# webpack-external-react

Webpack config helpers to exclude react from bundle and load it from external script (via CDN).

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

