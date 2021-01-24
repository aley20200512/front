// https://github.com/staven630/vue-cli4-config/blob/master/vue.config.js
const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  publicPath: '/',  // 部署时的基本url,
  outputDir: process.env.outputDir || 'dist', // 输出文件目录,
  assetsDir: 'static', // 静态资源存放的文件夹
  css: {
    // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
    // https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
    loaderOptions: {
      scss: {
        //  sass-loader版本采坑记
        //  sass-loader v8-，这个选项名是 "data"
        //  sass-loader v8 中，这个选项名是 "prependData"
        // sass-loader v10+，这个选项名是 "additionalData"
        additionalData: `@import "@/assets/style/public.scss";`
      }
    }
  },
  devServer: {
    open: true,  // npm run serve后自动打开页面
    host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
    port: 1013, // 开发服务器运行端口号
    proxy: null,
  },
  configureWebpack: config => {
    config.resolve.extensions = ['.js', '.vue', '.json']
    // config.resolve = {
    //   extensions: ['.js', '.vue', '.json'],
    //   alias: {
    //     '@': resolve('src')
    //   }
    // }
  }
}