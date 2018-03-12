## websocket即时聊天工具 ##

**前端技术栈：react+redux+immutable.js+Material-Ui
后端技术栈：koa2+mysql**

    npm start               项目启动
    
    npm run build           项目打包
    
基础架构是由 [*create-react-app*](https://github.com/facebook/create-react-app/) 工具生成，在 config/webpack.config.dev.js 中配置了别名（alias）,方便路径引用

     alias: {
      'assets':path.join(__dirname,'../src/assets'), //静态资源
      'components':path.join(__dirname,'../src/components'), //功能组件
      'utils':path.join(__dirname,'../src/utils'), //工具方法
      'store':path.join(__dirname,'../src/store'), //redux
    },

    
