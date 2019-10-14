# 理解IOC依赖注入<仿vue>

## IOC
1. **modules** 创建一个**modules** 模块容器
2. **Use** 将模块注入到模块容器中
3. **initModules** 初始化模块容器中的模块 通过**install**初始化模块将**控制器**传入
4. **options** 每一个依赖通过自己的**modules**值 配置选项 <new App<{calc:{model:'histroy'}}>>
   
## 组件
1. **install** 来获取 控制器的实例
2. 实例化自己的类，并将实例绑定在控制器上 <app.calc = new Calc(app.options.calc)>
3. 通过控制器来初始化 组件实例<app.calc.init()>

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/Liar0320/IOC/releases).

## 测试
```javascript
npm run start 
```

## 结束