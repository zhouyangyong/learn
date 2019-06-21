module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('hello hapi');
    },
    config: {
      // 登录校验
      // swagger API 文档生成工具
      tags: ['api', 'test'],
      description: '测试 hello-api'
    }
  },
]