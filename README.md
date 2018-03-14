## websocket即时聊天工具 ##

### 前端技术栈：react+redux+immutable.js+Material-Ui ###
### 后端技术栈：koa2+mysql ###

    npm start               前端项目启动

    npm service             后端服务启动
    
    npm run build           项目打包
    
*tips:本地开发，先 npm run server 启动后端服务，再 npm start 启动前端项目。*

基础架构是由 [*create-react-app*](https://github.com/facebook/create-react-app/) 工具生成，在 config/webpack.config.dev.js 中配置了别名（alias）,方便路径引用

     alias: {
      'assets':path.join(__dirname,'../src/assets'), //静态资源
      'components':path.join(__dirname,'../src/components'), //功能组件
      'utils':path.join(__dirname,'../src/utils'), //工具方法
      'store':path.join(__dirname,'../src/store'), //redux
      'views':path.join(__dirname,'../src/views'), //视图
      'api':path.join(__dirname,'../src/api') //请求api
    },

另外在 package.json 中配置了跨域代理，方便开发时前后端分离。

    "proxy": {
        "/api": {
            "target": "http://localhost:8080",
            "changeOrigin": true,
            "pathRewrite": {
            "^/api": ""
            }
        }
    }

