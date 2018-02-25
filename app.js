var express = require('express'); // 加载express模块
var app = express(); // 生成Web服务器实例
var fs = require('fs');
var path = require('path');
var port = process.env.PORT || 3000; // 设置监听端口
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var cookieParser = require('cookie-parser');
// 用来对session进行持久化
var mongoStore = require('connect-mongo')(session);
var logger = require('morgan');

/**
 * mongoose 简要知识点补充
 * mongoose模块构建在mongodb之上，提供了Schema[模式]、Model[模型]和Document[文档]对象，用起来更为方便。
 * Schema对象定义文档的结构（类似表结构），可以定义字段和类型、唯一性、索引和验证。
 * Model对象表示集合中的所有文档。
 * Document对象作为集合中的单个文档的表示。
 */

// mongodb默认端口27017
var dbUrl = 'mongodb://localhost/movie';
var mongoose = require('mongoose');
mongoose.connect(dbUrl); // 连接mongodb本地数据库movie

// models loading
var models_path = __dirname + '/app/models'; // 加载模型所在路径
// 路径加载函数，加载各模型的路径,所以可以直接通过mongoose.model加载各模型 这样即使模型路径改变也无需更改路径
var walk = function(path) {
  fs
    .readdirSync(path)
    .forEach(function(file) {
      var newPath = path + '/' + file;
      var stat = fs.statSync(newPath);

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(newPath)
        }
      } else if (stat.isDirectory()){
        walk(newPath);
      }
    });
}
walk(models_path);

// 视图文件根目录
app.set('views', './app/views/pages');
// 设置模板引擎
app.set('view engine', 'pug');

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
// 使用mongo对session进行持久化，将session存储进数据库中
app.use(session({
  secret: 'movie',
  resave: false,
  saveUninitialized: false,
  store: new mongoStore({
    url: dbUrl,
    collection: 'sessions'
  })
}));

app.use(multer({ dest: '/tmp/'}).array('uploadPoster'));

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// var serveStatic = require('serve-static');  // 静态文件处理
// app.use(serveStatic('public')); // 路径：public

app.locals.moment = require('moment');

var env = process.env.NODE_ENV || 'development';

if ('development' === env) {
  // 在屏幕上将信息打印出来
  app.set('showStackError',true);
  // 显示的信息
  app.use(logger(':method :url :status :remote-addr'));
  // 源码格式化，不要压缩
  app.locals.pretty = true;
  mongoose.set('debug',true);
}

// 路由控制
require('./config/routes')(app);

// 服务器监听端口
app.listen(port);

console.log('imooc started on port ' + port);

