class Calc{
    constructor(options = {}){
        this.mode = options.mode;
    }
    /**
     * 加法
     * @param {number} x 
     * @param {number} y 
     */
    add(x,y){
        return x+y;
    }

    /**
     * 平方
     * @param {number} a 
     */
    sqrt(a){
        return Math.sqrt(a);
    }

    init(){
        console.log("calc ready");
    }
}

module.exports = {
    /**
     * 
     * @param { import("../Ioc") } app 
     */
    install(app){
        app.calc = new Calc(app.options.calc);
        app.calc.init();
    }
};