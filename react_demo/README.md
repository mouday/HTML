# React demo

TodoList参考: http://todolist.cn/
项目文件为`src`文件夹

# 安装环境
Node.js https://nodejs.org/
reactjs https://reactjs.org/

更换npm淘宝源

    $ npm config set registry https://registry.npm.taobao.org
    -- 配置后可通过下面方式来验证是否成功
    $ npm config get registry

环境检查
windows shift+右键 在此处打开命令行窗口
    
    $ node -v
    $ npm -v

# 新建项目

    $ npx create-react-app my-app
    $ cd my-app
    $ npm start

# 精简项目

    registerServiceWorker.js
    index.css
    App.test.js
    App.css
    logo.svg

# 组件
网页中的一部分， 一般采用大写字母开头
定义一个组件需要继承React.Component
1. 必须有render
2. 花括号中可以写js表达式
3. 支持jsx语法，可以直接使用标签结构
4. render函数只能返回一个标签内容
5. 父组件通过属性给子组件传递参数
6. 子组件通过props接收父组件传递过来的参数
7. 思想：面向数据编程
8. 子组件如果要和父组件通讯，要调用父组件传递过来的方法
9. css样式类关键词使用className="value"， style={{key: "value"}}
