Page({
  data: {
    hasUserInfo: false,
    userInfo: {},
    todos: [],
    addShow: false,
    addText: '',
    focus: false,
    status: 1
  },
  showStatus: function(e) {
    var status = e.currentTarget.dataset.status;
    if(status === this.data.status) {
      return ;
    }
    this.setData({
      status: status
    })
  },
  setInput: function(e) {
    // console.log(e);
    this.setData({
      addText: e.detail.value
    })  
  },
  addTodo: function() {
    // 1. 检测有没有输入
    if(!this.data.addText.trim()) {
      wx.showToast({
        title: '请输入todo',
        duration: 1000,
        icon: 'none'
      })
      return;
    }
    // 2. todos push
    let todos = this.data.todos;
    // todos.push({
    //   title: this.data.addText,
    //   id: new Date().getTime(),
    //   status: 0
    // })
    this.setData({
      todos: [
        {
          title: this.data.addText,
          id: new Date().getTime(),
          status: 0
        },
        ...this.data.todos
      ],
      addShow: false,
      addText: '',
      focus: false
    })
    // this.data.todos.push({
    //   title: this.data.addText,
    //   id: new Date().getTime()
    // })
    // 3. 关闭表单

  },
  addTodoHide: function() {
    this.setData({
      addShow:false
    })
  },
  addTodoShow: function() {
    this.setData({
      addShow:true,
      focus: true
    })
  },
  getUserInfo: function(e) {
    console.log(e);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
