const Emitter = require('events');
const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');

module.exports = class Application extends Emitter {
  constructor() {
    super();
    this.context = Object.create(context);
    this.response = Object.create(context);
    this.request = Object.create(request);
  }
  user() {

  }
  listen(...arg) {
    const server = http.createServer(this.callback())
    server.listen(...arg);
  }
  callback() {
    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res);
      console.log(ctx.url, ctx.url === ct.request.url);
      res.end('hello koa');
    }
    return handleRequest;
  }
  createContext(req, res) {
    const context = Object.create(this.context);
    const request = context.request = Object.create(this.request);
    const response = context.response = Object.create(this.response);
    context.req = request.req = req;
    context.res = response.res = res;
    return context;
  }
}