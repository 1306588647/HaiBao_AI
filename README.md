# 海宝智能AI

### 功能描述:

* 图片识别：动物识别、植物识别、手势识别、菜品识别、货币识别、logo识别
* 图片渲染：人像漫画、黑白炫彩、图像去雾、清晰增加

### 界面：

 ![image-20200718223333960](https://gitee.com/gghworld/images/raw/master/img/20200718223334.png)

 ![image-20200718223421448](https://gitee.com/gghworld/images/raw/master/img/20200718223421.png)

### 系统架构：

![image-20200718182022828](https://gitee.com/gghworld/images/raw/master/img/20200718182022.png)

## 环境搭建

### 1.Node.js并配置环境变量

* **[Node.js](https://nodejs.org/zh-cn/)：安装路径最好不要放在C盘，因为会涉及很多权限问题。**

* **安装完成后测试一下**

  * `node -v`

  * `npm -v`

     ![image-20200718184659836](https://gitee.com/gghworld/images/raw/master/img/20200718184659.png)

* **配置环境变量**

  * 在nodejs主目录**(我这里是E:\nodejs)**下创建两个文件夹：**node_global**、**node_cache**，然后执行如下命令：

    1. `npm  config  set prefix  "E:\nodejs\node_global"`

    2. `npm  config  set  cache "E:\nodejs\node_cache"`

  * 在命令行输入以下命令安装express包：

    `npm install express –g`

    安装完成后到`E:\nodejs\node_global\node_modules`看是否有该包；

    ![image-20200718183550075](https://gitee.com/gghworld/images/raw/master/img/20200718183550.png)

  * 我的电脑 -> 右键 -> 属性 -> 高级系统设置 -> 环境变量 -> 系统变量中添加系统变量NODE_PATH，输入路径：
     `E:\nodejs\node_global\node_modules`

    ![image-20200718223231644](https://gitee.com/gghworld/images/raw/master/img/20200718223231.png)

     
     
  * 在命令行输入node进入编辑模式，输入以下代码检查是否能正常加载模块：

    `require(“express”);`

    ![image-20200718183900796](https://gitee.com/gghworld/images/raw/master/img/20200718183900.png)

    如果出错，检查NODE_PATH配置是否正确

* **安装淘宝cnpm**

  * 安装：

    `npm install -g cnpm --registry=https://registry.npm.taobao.org`

  * 添加系统变量path的内容：

    因为cnpm会被安装到`E:\nodejs\node_global`下，而系统变量path并未包含该路径。在系统变量path下添加该路径即可正常使用cnpm；如下图：

    ![image-20200718223305090](https://gitee.com/gghworld/images/raw/master/img/20200718223305.png)

    

  * 输入cnpm –v检查是否正常
  
    ![image-20200718184632867](https://gitee.com/gghworld/images/raw/master/img/20200718184632.png)

----

### 2.安装[Egg](https://eggjs.org/zh-cn/intro/quickstart.html)框架

​	先安装[VS code](https://code.visualstudio.com/)

​	接下来的操作可以在vs code打开服务器文件夹，然后使用终端进行控制

* 建立一个文件夹来装egg框架

* 打开创建的文件夹，并在该文件夹下启动cmd输入一下命令

   `npm init egg --type=simple`（可能速度很慢，如果慢的话可以翻墙）

  `npm i`(安装包)

  `npm run dev`(启动服务器)

### 3.Egg跨域

* 1. **egg-cors**

     框架提供了`egg-cors`插件来实现cors跨域请求。

  2. **egg-cors的安装和配置**

     `cnpm i --save egg-cors`

     开启插件：// config/plugin.js

     ```javascript
     //跨域处理
       cors:{
         enable: true,
         package: 'egg-cors',
       }
     
     ```

     配置cors：// config/config.default.js

     ```javascript
     // 跨域的配置
        
     
     config.security = {
         	csrf: {
           	enable: false,
           	ignoreJSON: true,
         	},
       	};
     config.cors = {
             origin: '*',
             allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
         };
     
     ```

     

### 4.数据库操作（可下载phpstudy直接配置数据库）

* 安装与配置

  `npm i --save egg-mysql`

  开启插件：// config/plugin.js

  ```JavaScript
  mysql:{
      enable:true,
      package:'egg-mysql',
    },
  ```

  配置数据库：// config/config.default.js

  ```javascript
  //数据库配置
  config.mysql={
    //但数据库信息配置
    client:{
      // host
      host:'localhost',
      // 端口号
      port:'3306',
      // 用户名
      user:'root',
      // 密码
      password:'root',
      // 数据库名
      database:'user',
    },
    // 是否加载到app上，默认开启
    app:true,
    // 是否加载到agent 上，默认关闭
    agent:false,
  };
  ```

----

### 环境配置好后，就可以运行了

