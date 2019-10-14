/*
 * @Author: lich 
 * @Date: 2019-10-14 10:18:23 
 * @Last Modified by: lich
 * @Last Modified time: 2019-10-14 10:48:22
 */


/** 
 * @constructor
 * @returns 
 * @description 提供一个use函数注入模块
 */
class App {
    constructor(options){
        this.options = options || {};
        this._onReady();
        this._initModules();
    }

    /** 
     * @param { Array<{install:Function} | {install:Function}> } modules 
     */
    static use(modules){
        Array.isArray(modules) ? modules.forEach(_module=>App.use(_module)):App.modules.push(modules);
    }

    _onReady(){
        console.log("ready");
        this.onReady = 'ready';
    }

    /**调用每一个模块的install函数 绑定this */
    _initModules(){
        App.modules.forEach(_module => { _module.install && typeof _module.install === 'function' && _module.install(this);});
    }

    
}
App.modules = [];

module.exports = App;