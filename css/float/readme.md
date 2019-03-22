## 清除浮动的几种方法
1. 在父元素底部加上一行代码
   <div style="clear: left | right | both;"></div>
2. 在父元素css 中加上
    div.content{
        float: left;
    }
3. 父级div定义伪类: after,  给父元素div添加一个clearFixde的class类
   .clearFix::after{
       content: "";
       display: block;
       clear: both;
   }
4. 利用BFC简称 (块级格式化上下文)的效果来弥补父容器的高度塌陷
   div.content{
       overflow: hidden | auto | scroll;
   }
5. 尼古拉斯大师 方法,把父容器的display设置为table,可以创建一个匿名表格单元,直接触发BFC效果
   .content{
       display: table;
   }