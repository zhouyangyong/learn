const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const config = require('./public/config')[isDev ? 'dev' : 'build'];

module.exports = {
  entry: './src/index.js', //webpack的默认配置
  output: {
    path: path.resolve(__dirname, 'dist'), //必须是绝对路径
    filename: 'bundle.[hash].js',
    publicPath: '/', //通常是CDN地址
  },
  devtool: 'eval-cheap-module-source-map', //开发环境下使用，生产环境可以使用 none 或者是 source-map
  mode: isDev ? 'development' : 'production',
  devServer: {
    port: '8081', //默认是8080
    hot: true, // 热更新
    // quiet: false, //默认不启用
    // inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
    // stats: 'errors-only', //终端仅打印 error
    // overlay: false, //默认不启用
    // clientLogLevel: 'silent', //日志等级
    // compress: true, //是否启用 gzip 压缩
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  corejs: 3,
                },
              ],
            ],
          },
        },
        exclude: /node_modules/, // 排除node_modules目录
      },
      // webpack 不能直接处理 css，需要借助 loader。如果是 .css，我们需要的 loader 通常有： style-loader、css-loader，
      // 考虑到兼容性问题，还需要 postcss-loader，而如果是 less 或者是 sass 的话，还需要 less-loader 和 sass-loader，这里配置一下 less 和 css 文件(sass 的话，使用 sass-loader即可)
      // style-loader 动态创建 style 标签，将 css 插入到 head 中.
      // css-loader 负责处理 @import 等语句。
      // postcss-loader 和 autoprefixer，自动生成浏览器兼容性前缀 —— 2020了，应该没人去自己徒手去写浏览器前缀了吧
      // less-loader 负责处理编译 .less 文件,将其转为 css
      // loader 的执行顺序是从右向左执行的，也就是后面的 loader 先执行，上面 loader 的执行顺序为: less-loader ---> postcss-loader ---> css-loader ---> style-loader
      {
        test: /\.(less|css)/,
        use: [
          'style-loader',
          'css-loader',
          {
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')({
                    overrideBrowerslist: ['>0.25%', 'not dead'],
                  }),
                ];
              },
            },
          },
          'less-loader',
        ],
        exclude: /node_modules/,
      },

      {
        test: /\.(png|jpg|gif|jpeg|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240, // 资源大小小于 10K 时，将资源转换为 base64，超过 10K，将图片拷贝到 dist 目录
              esModule: false, // esModule 设置为 false，否则，<img src={require('XXX.jpg')} /> 会出现 <img src=[Module Object] />
              outputPath: 'assets',
              // name: '[name]_[hash:6].[ext]'
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    //数组 放着所有的webpack插件
    // new HtmlWebpackPlugin({
    //   template: './public/index.html',
    //   filename: 'index.html', //打包后的文件名
    //   minify: {
    //     removeAttributeQuotes: false, //是否删除属性的双引号
    //     collapseWhitespace: false, //是否折叠空白
    //   },
    //   // hash: true //是否加上hash，默认是 false
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', //打包后的文件名
      config: config.template,
    }),
    new webpack.HotModuleReplacementPlugin(), //热更新插件
  ],
};
