const path = require('path')
module.exports = {
  publicPath: '',
  chainWebpack: (webpackConfig) => {
    /* https://vue-i18n.intlify.dev/guide/advanced/sfc.html#vue-cli */
    webpackConfig.module
      .rule('i18n-resource')
      .test(/\.(json5?|ya?ml)$/)
      .include.add(path.resolve(__dirname, './src/locales'))
      .end()
      .type('javascript/auto')
      .use('i18n-resource')
      .loader('@intlify/vue-i18n-loader')

    webpackConfig.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@intlify/vue-i18n-loader')
  },
}
