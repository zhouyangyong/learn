const Emitter = require('events');
const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');
const compose = require('./compose');

module.exports = class Application extends Emitter {
  constructor() {
    super();
    this.middleare = [];
    this.context = Object.create(context);
    this.response = Object.create(context);
    this.request = Object.create(request);
  }
  user(fn) {
    this.middleare.push(fn);
  }
  listen(...arg) {
    const server = http.createServer(this.callback())
    server.listen(...arg);
  }
  callback() {
    const fn = compose(this.middleare);
    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res);
      console.log(ctx.url, ctx.url === ct.request.url);
      res.end('hello koa');
      this.handleRequest(ctx, fn);
    }
    return handleRequest;
  }
  handleRequest(ctx, fn) {
    const handleResponse = () => {
      return response
    }
    return fnMiddleWare(ctx).then()
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