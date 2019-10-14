/*
 * @Author: lich 
 * @Date: 2019-10-14 10:17:59 
 * @Last Modified by: lich
 * @Last Modified time: 2019-10-14 10:49:43
 */
const Ioc = require("./Ioc");
const calc = require('./components/calc');

Ioc.use(calc);

const app = new Ioc({});
console.log(app.calc.sqrt(4));
