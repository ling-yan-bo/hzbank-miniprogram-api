小程序API封装
====
封装说明
----

> 把小程序官方提供的API进行了一层封装，方便日后对小程序开发的控制  
> 把手机银行常用的客户端方法名称也封装进来，把调用小程序API和调用客户端方法统一起来  


使用步骤  
1、下载npm包  
```javaScript
    npm install mpaas-api
```
2、在小程序主目录下的app.js引入下载的包，并设置为全局变量  
```javaScript
    import mpaas from "mpaas-api/platforms/alipay"
```
3、在小程序主目录下新建mini.project.json文件，在文件中写入下面代码，这样做是为了让小程序支持es6语法  
```javaScript
    {"node_modules_es6_whitelist": ["mpaas-api"]}
```
4、在各个page中通过引入const app = getApp(),然后用app.hzbank.xxx来替换my.xxx