npm init -y
yarn add mysql2 sequelize sequelize-cli
./node_modules/.bin/sequelize init 
./node_modules/.bin/sequelize db:create / table:create
./node_modules/.bin/sequelize migration:create --name create-shops-table 建表或修改表，都叫创建一个迁移文件
./node_modules/.bin/sequelize db:migrate 执行迁移
./node_modules/.bin/sequelize db:migrate:undo 回归上一步操作
./node_modules/.bin/sequelize seed:create --name init-shops 初始化数据
./node_modules/.bin/sequelize db:seed:all 执行

- sequelize 数据库脚手架
  mysql2 数据库驱动
  sequelize orm 工具 table -> object
  对底层的sql API 化 优化 model 
  sequelize-cli 命令行工具

- migrations 