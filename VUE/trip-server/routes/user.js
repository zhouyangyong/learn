var express = require('express');
var router = express.Router()
var mysql = require('mysql');

var data = {
  code: '200',
  message: 'success'
}

var pool = mysql.createPool({
  post: 'localhost',
  user: 'root',
  password: '123456',
  database: 'trip'
})

// 定义接口 