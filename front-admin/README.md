# front-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 问题与解决

### 引入ant-design-vue

1. 按需引入ant-design-vue

   安装babel-plugin-import 用于按需加载组件代码和样式的 babel 插件  npm i babel-plugin-import

   配置babel.config.js:

   ```js
   plugins: [
       [
         'import',
         { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
       ]
   ]
   ```

2. 按需引入Ant Design报错“error in ./node_modules/ant-design-vue/es/empty/style/index.less”

   安装less、less-loader    npm install less less-loader --save

   ```js
   plugins: [
       [
         'import',
         { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" }
       ]
   ]
   ```

   


