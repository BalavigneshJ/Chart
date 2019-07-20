process.env.NODE_ENV = 'development';   //No I18N

const fs = require('fs-extra');  //No I18N
const paths = require('react-scripts/config/paths');  //No I18N
const webpack = require('webpack');  //No I18N
const importCwd = require('import-cwd');  //No I18N
const config = importCwd('react-scripts/config/webpack.config')('production');  //No I18N

var entry = config.entry;
var plugins = config.plugins;

entry = entry.filter(fileName => !fileName.match(/webpackHotDevClient/));
plugins = plugins.filter(plugin => !(plugin instanceof webpack.HotModuleReplacementPlugin));

config.entry = entry;
config.plugins = plugins;

webpack(config).watch({}, (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    copyPublicFolder();
  }
  console.error(stats.toString({
    chunks: false,
    colors: true
  }));
});

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
  });
}
