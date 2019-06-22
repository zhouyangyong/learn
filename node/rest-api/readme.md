fullstack 全栈
Front Enginner
Backend /api

restful api
浏览器与服务器通信方式的一种设计风格

- restful 的世界里，一切皆资源
- url 来唯一定位资源的识别符
  /posts/:id/comments path部分 
- 添加一条 comment 怎么办？ /comments/2
  {
    id: 2,
    body: "好巧，你那边也在下雨",
    postId: 1
  }
  /comments 设计好URL POST
- 设计有意的URL 
  资源  状态改变 
  POST /comments 加了一天评论 id: 2
  修改一下内容
  PUT  /comments/2 body: '最美不过小雨天，一起与你...'
  操作      SQL 方法    HTTP 动词
  CREATE    INSERT      POST
  READ      SELECT      GET
  UPDATE    UPDATE      PUT/PATCH  PUT(所有){body: '', postId: 1}   PATCH(部分){body: ''}
  DELETE    DELETE      DELETE

  状态 切换，使用定义的谓语动词