- npm run script里的 各种工作流脚本
  一定要在根目录
  1. dev 开发时运行的脚本
  2. start 启动服务器的脚本
     live-server
  3. build 开发完成后，一键build 生成上线文件
     代码是压缩过后的
   
- webpack bundle 打包工具，一切皆可打包
  1. webpack src/index.js dist/main.js
  2. webpack-cli 命令行工具
  3. webpack-dev-server 运行webpack编译同时，启动8080端口，web-server

- html templete
  1. css
  2. js

- resolve里extensions 加后缀
  module里加 rules: [
      规则
      js->babel->preset->env
      css->style-loader
      css-loader
      stylus->stylus,
      stylus-loader
  ]

- 一切皆可打包， 打包成可运行的js
  生成的文件，最好js css 分家一个文件， http并发多个请求 拆成少数几个文件，
  js css 分离，这是必须的 样式抽离