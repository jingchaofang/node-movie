node
express
mongodb
mongoose(schema、model、documents) 快速建模
pug（jade）模板引擎
moment.js

jquery
bootstrap

grunt
less cssmin
eslint uglifyjs
mocha

需求分析
项目依赖初始化
入口文件编码
创建视图
测试前端流程
样式开发，伪造模板数据
设计数据库模型
开发后端逻辑
配置依赖文件，网站开发结束


[前端依赖管理bower](https://bower.io/)

```
npm install bower --save-dev
```

```
bower install bootstrap
bower install jquery
```

TODO：[preen](https://github.com/BradDenver/Preen)的依赖模块有很多过期的需要更新
```
npm install preen --save-dev
```

bower.json中加入preen配置
```
{
  "name": "movie",
  "description": "node movie",
  "main": "app.js",
  "authors": [
    "jingchaofang"
  ],
  "license": "MIT",
  "homepage": "https://github.com/jingchaofang/node-movie",
  "private": true,
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "public/libs",
    "test",
    "tests"
  ],
  "dependencies": {
    "bootstrap": "^4.0.0",
    "jquery": "^3.3.1"
  },
  "preen": {
    "jquery": ["dist/*.js"],
    "bootstrap": ["dist/**/*.+(css|js)"]
  }
}
```

包管理器npm

```
mkdir node-movie
cd node-movie
npm init
```

mongodb

```
brew install mongodb
```

连接mongodb
```
sudo mkdir -p /data/db
```
输入mongod启动mongodb，再打开一个终端窗口执行mongo命令进入mongodb的shell，它可以运行javascript。

[mongodb driver for nodejs](https://github.com/mongodb/node-mongodb-native)

```
npm install mongodb --save
```

[mongoose](https://github.com/Automattic/mongoose)

```
npm install mongoose
```

[express](https://github.com/expressjs/express)

```
npm install express --save
```

```
npm install pug --save
```

[moment](https://github.com/moment/moment)

```
npm install moment
```

[underscore](https://github.com/jashkenas/underscore)

```
npm install underscore
```

[body-parser](https://github.com/expressjs/body-parser)

```
npm install body-parser
```

[bcrypt](https://github.com/kelektiv/node.bcrypt.js)

```
npm install bcrypt
```

session持久化的方法：基于cookie、基于内存、基于redis、基于mongoDB

express的session机制

利用mongodb做会话的持久化

```
npm install cookie-parser
npm install express-session
npm install connect-mongo
```

```
npm install multer
```

```
npm install morgan
```

```
npm install should --save-dev
```

# related

[npm script](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

[express](https://expressjs.com/)

[express pug](https://expressjs.com/en/guide/using-template-engines.html)

[mongoose 基础入门](https://www.cnblogs.com/xiaohuochai/p/7215067.html?utm_source=itdadao&utm_medium=referral)

[body-parser](http://blog.csdn.net/yanyang1116/article/details/54847560)

[bootstrap v4文档中文](https://v4.bootcss.com/)

[pug-lint](https://www.npmjs.com/package/pug-lint)

[cookie-parser 中间件](https://github.com/expressjs/cookie-parser)

[express-session 中间件](https://github.com/expressjs/session)

[connect-mongo 中间件](https://github.com/jdesboeufs/connect-mongo)

[参考MEAN的目录结构](https://github.com/linnovate/mean)

[豆瓣电影api](https://developers.douban.com/wiki/?title=api_v2)

[crypto](https://nodejs.org/dist/latest-v8.x/docs/api/crypto.html)

[should](https://github.com/shouldjs/should.js)

[multer](https://github.com/expressjs/multer)

[multer实例](https://www.cnblogs.com/chyingp/p/express-multer-file-upload.html)

[express 基础入门](http://www.runoob.com/nodejs/nodejs-express-framework.html)

[jade迁移到pug](https://pug.bootcss.com/api/migration-v2.html)
