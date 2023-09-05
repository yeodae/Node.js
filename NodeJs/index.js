const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStr(str){
    if(str.length % 2){
        return odd;    
    }
    return even;
}

console.log(checkStr(4));