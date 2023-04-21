const path = require('path')

const NODE_ENV = 'development' // 开发环境 打包doc

const baseConfig = {
  // 扩展 webpack 配置
  chainWebpack: (config) => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias.set('@', path.resolve('examples')).set('~', path.resolve('packages'))

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        // 修改它的选项...
        return options
      })
  },
  css: {
    extract: false,
    loaderOptions: {
      // 给 sass-loader 传递选项, 这样就能全局使用 var.scss 中的变量了.sass-loader 8.0.0之前prependData为data
      sass: {
        prependData: `@import "packages/theme-chalk/src/common/var.scss";`,
      },
    },
  },
}

const devConfig = {
  pages: {
    index: {
      entry: 'examples/main.js', // page 的入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 [outputDir]/index.html 的输出
    },
  },
  publicPath: './',
  lintOnSave: false,
  outputDir: 'docs',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
  },
  ...baseConfig,
}

const buildConfig = {
  // configureWebpack: {
  //   entry: components,
  //   output: {
  //     filename: '[name].js',
  //     libraryTarget: 'commonjs2',
  //   },
  // },
  // outputDir: 'lib',
  // productionSourceMap: false,
  ...baseConfig,
}

module.exports = NODE_ENV === 'development' ? devConfig : buildConfig
