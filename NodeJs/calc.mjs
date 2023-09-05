import { v1, v2 } from './number.mjs';

var calc = {};

calc.add = (x,y) => {
    if((x+y) >= 0){
        return v1;
    }
    return v2;
}
calc.sub = (x,y) => {
    if((x-y)<0){
        return v2;
    }
    return v1;
}
export default calc;



