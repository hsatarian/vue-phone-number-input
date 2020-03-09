module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  publicPath: './',
  lintOnSave: undefined
}