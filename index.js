/**
 * Webpack config helpers for externalizing react from your bundle.
 *
 * @author Maciej Chałapuk (maciej@chalapuk.pl)
 */
exports.externals = {
  'react': {
    root: 'React',
    commonjs: 'react',
    commonjs2: 'react',
  },
  'prop-types': {
    root: 'PropTypes',
    commonjs: 'prop-types',
    commonjs2: 'prop-types',
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs: 'react-dom',
    commonjs2: 'react-dom',
  },
  'react-dom/server': {
    root: 'ReactDOMServer',
    commonjs: 'react-dom/server',
    commonjs2: 'react-dom/server',
  },
};

exports.noParse = [
  require.resolve('react'),
  require.resolve('prop-types'),
  require.resolve('react-dom'),
  require.resolve('react-dom/server'),
];

