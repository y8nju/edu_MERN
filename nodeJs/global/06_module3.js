/* 
	ESM 방식의 모듈은 require 가 아니라 import
	ESM 방식으로 모듈 처리를 하려면, 확장자를 mjs로 설정하거나
	실행환경 설정을 바꿔야한다
*/

import {add, multifly} from './custom/calcModule.js';
import * as calc from './custom/calcModule.js';

let val1 = add(3, 5);
console.log(val1);
let val2 = calc.multifly(3, 4, 5, 6);