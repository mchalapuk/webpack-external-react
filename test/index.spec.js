
const path = require('path');
const webpack = require('webpack');
const should = require('should');

const externalReact = require('..');

describe('webpack-external-react', () => {
  const config = {
    mode: 'production',
    entry: './test/entry.js',

    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname),
      libraryTarget: 'commonjs',
    },

    target: 'node',
    devtool: false,

    resolve: {
      extensions: [
        '.js',
      ],
    },

    externals: externalReact.externals,

    module: {
      noParse: externalReact.noParse,
    },
  };

  describe('after constructing webpack compiler', () => {
    let compiler;

    beforeEach(() => {
      compiler = webpack(config);
    });

    describe('and after compilation', () => {
      let error;
      let stats;

      beforeEach(end => {
        compiler.run((e, s) => {
          error = e;
          stats = s.toJson();
          end();
        });
      });

      it('finishes without fatal error', () => {
        should.not.exist(error);
      });
      it('finishes without compilation errors', () => {
        stats.errors.should.have.length(0);
      });
      it('finishes without compilation warnings', () => {
        stats.warnings.should.have.length(0);
      });
      it('produces bundle of size indicating lack of heavy libraries', () => {
        const entry = stats.assets[0];
        entry.name.should.eql('main.bundle.js');
        entry.size.should.be.lessThan(5000);
      });
    });
  });
});

