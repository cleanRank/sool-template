
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const productionGzipExtensions = ['js', 'css'] // 需要gzip压缩的文件后缀
const path = require('path')
const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)
const filenameHashing = true
const productionSourceMap = !IS_PROD
const assetsDir = ''
function resolve (dir) {
  return path.join(__dirname, dir)
}
function getAssetPath (assetsDir, filePath) {
  return assetsDir
    ? path.posix.join(assetsDir, filePath)
    : filePath
}
const option = {
  // 基本路径
  // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  outputDir: 'gees',
  // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: '',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: filenameHashing,
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  // lintOnSave: process.env.NODE_ENV !== 'production',
  lintOnSave: true,
  publicPath: IS_PROD ? './' : './',
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // Babel 显式转译列表
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: productionSourceMap,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    config.resolve.symlinks(true) // 修复热更新失效
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('lib', resolve('src/lib'))
      .set('config', resolve('src/config'))
      .set('router', resolve('src/router'))
      .set('view', resolve('src/view'))
      .set('store', resolve('src/store'))
      .set('mixin', resolve('src/mixins'))
    // 打包分析
    if (process.env.IS_ANALYZ) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
    }
    // 制定环境打包js路径
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
      const isLegacyBundle = process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD
      const filename = getAssetPath(
        assetsDir,
        `js/[name]${isLegacyBundle ? `-legacy` : ``}${filenameHashing ? '.[contenthash:8]' : ''}.js`
      )
      config.mode('production').devtool(productionSourceMap ? 'source-map' : false).output.filename(filename).chunkFilename(filename)
    }
    // 修改图片输出路径
    // config.module.rule('images').test(/\.(png|jpe?g|gif|ico)(\?.*)?$/).use('url-loader').loader('url-loader').options({
    //   name: path.join('../assets/', 'img/[name].[ext]')
    // })
  },
  configureWebpack: (config) => {
    if (IS_PROD) {
      // 为生产环境修改配置...
      // config.mode = 'production'
      // 打包去掉注释以及console
      config.plugins = config.plugins.concat(
        [
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                // warnings: false,
                drop_debugger: true,
                drop_console: true
              }
            }
          })
        ]
      )
      config.performance = {
        hints: 'warning',
        maxEntrypointSize: 50000000,
        maxAssetSize: 30000000,
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js')
        }
      }
      // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖
      // config.externals = {
      //   'vue': 'Vue',
      //   'element-ui': 'ELEMENT',
      //   'vue-router': 'VueRouter',
      //   'vuex': 'Vuex',
      //   'axios': 'axios'
      // }
      // 2. 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: IS_PROD,
    // 为css后缀添加hash
    // extract: {
    // filename: 'css/[name].[hash:8].css',
    // chunkFilename: 'css/[name].[hash:8].css'
    // },
    // 开启 CSS source maps?
    sourceMap: !IS_PROD,
    // css预设器配置项
    loaderOptions: {
      sass: {
        // 向全局sass样式传入共享的全局变量
        // data: `@import "~assets/scss/flex.scss";$src: "${process.env.VUE_APP_SRC}";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8088,
    hot: true,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      // 设置代理
      '/api': {
        target: 'http://10.4.35.68:8070', // 真实请求的目标地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/font': {
        target: 'http://10.5.2.140:8070', // 真实请求的目标地址
        changeOrigin: true,
        pathRewrite: {
          '^/font': ''
        }
      }
    },
    before: (app) => {}
  },
  // 第三方插件配置
  pluginOptions: {
    'process.env': {
      NODE_ENV: '"development"'
    }
    // 安装vue-cli-plugin-style-resources-loader插件
    // 添加全局样式global.scss
    // "style-resources-loader": {
    //  preProcessor: "scss",
    //  patterns: [
    //   resolve(__dirname, "./src/scss/init.scss")
    //  ]
    // }
  }
}
module.exports = option
