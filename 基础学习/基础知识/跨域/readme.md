跨域问题其实就是浏览器的同源策略所导致的。
所谓同源是指"协议+域名+端口"三者相同

1、 通过 jsonp 跨域
jsonp 的原理就是利用 script 标签没有跨域限制，通过 script 标签 src 属性，发送带有 callback 参数的 GET 请求，
服务端将接口返回数据拼凑到 callback 函数中，返回给浏览器，浏览器解析执行，从而前端拿到 callback 函数返回的数据。

jsonp 缺点：只能实现 get 一种请求。

2、 document.domain + iframe 跨域
3、 location.hash + iframe
4、 window.name + iframe 跨域
5、 postMessage 跨域
6、 跨域资源共享（CORS）
7、 nginx 代理跨域
8、 nodejs 中间件代理跨域
9、 WebSocket 协议跨域
