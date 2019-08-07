const delegates = require('delegates');
//  代理
var proto = module.exports = {}
delegates(proto, 'response')
.access('body');
delegates(proto, 'request')
.access('method')
.access('url');