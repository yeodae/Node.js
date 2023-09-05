import {odd, even} from './var.mjs';

function checkNumber(num){
    if(num % 2){
        return odd;
    }
    return even;
}

export default checkNumber; // 여기까지가 문법