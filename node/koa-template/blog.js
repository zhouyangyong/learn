const Koa = require('koa');
// 支持哪些 模板引擎
const views = require('koa-views');
const ejs = require('ejs');
const path = require('path');
const app = new Koa();

const user = {
  name: '范老板',
  posts: [
    {
      id: 0,
      title: '小程序踩坑指南'
    },
    {
      id: 1,
      title: 'vue.js 浅析 组件数据传递'
    }
  ]
}

const postsDetail = [
  {
    id: 0,
    content: '你是个臭弟弟'
  },
  {
    id: 1,
    content: '<strong>我不是臭弟弟</strong>'
  }
]

app.use(
  views(path.join(__dirname, './views'), {
    extension: 'ejs'
  })
)

// /user 个人主页面
// /posts 文章详情

app.use(async (ctx) => {
  // 区分 页面
  // http://localhost:8080/user
  // console.log(ctx.path);
  // 默认是 / 
  if(ctx.path === '/user') {
    await ctx.render('user', { user });
  } else if(ctx.path === '/posts') {
    // http://localhost:8080/posts?id=0
    const { id } = ctx.query;
    const post = postsDetail.find(postItem => postItem.id == id );
    await ctx.render('post', { post });
  } else {
    ctx.body = `无法处理该请求`;
  }
})

app.listen(8080, () => {
  console.log('server is running 8080')
})