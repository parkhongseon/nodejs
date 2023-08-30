// 모듈을 가져오기 위한 명령어 : require
const {odd,even}= require('./var')

let num = 5;

let result = num %2 == 0 ? even : odd
console.log(result)