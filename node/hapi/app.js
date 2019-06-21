// 单点入口
const Hapi = require('hapi');
const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi');
const routesShop = require('./routes/shops');
const routesOrders = require('./routes/orders');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const config = require('./config');

// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host
})

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ])
  server.route([
    ...routesHelloHapi,
    ...routesShop,
    ...routesOrders
  ]);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

init();