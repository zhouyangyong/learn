## 请求头
一次http 事务 有啥：
- 请求的时候
请求头 空行 请求体
content-type: 规定我们向服务端发送请求体的格式
1. application/x-www-form-urlencoded
form 表单 默认的 发送请求的格式
name = lilei&age=18
<!-- xml -->
<name>lihua</name>
<age>18</age>
2. application/json
以 JSON 的格式 发送
{
    "name": "lihua",
    "age": 18
}
- 相应的时候
响应头 空行 相应体
content-type
通用首部：请求/响应