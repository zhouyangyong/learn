// 函数防抖 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

function debounce(fn, delay) {
  var timer;
  return function () {
    var _this = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, delay);
  };
}

// 函数节流 每隔一段时间，只执行一次函数。

function throttle(fn, delay) {
  var timer;
  return function () {
    var _this = this;
    var args = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(_this, args);
      timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
    }, delay);
  };
}

// 函数防抖的应用场景
// 连续的事件，只需触发一次回调的场景有：

// 搜索框搜索输入。只需用户最后一次输入完，再发送请求
// 手机号、邮箱验证输入检测
// 窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。

// 函数节流的应用场景
// 间隔一段时间执行一次回调的场景有：

// 滚动加载，加载更多或滚到底部监听
// 谷歌搜索框，搜索联想功能
// 高频点击提交，表单重复提交


function debounce (fn, dely) {
  var timer
  return function() {
    var _this = this
    if(timer) {
      clearTimeout()
    }
    timer = setTimeout(() => {
      fn.apply(_this, arguments)
    }, dely)
  }
}