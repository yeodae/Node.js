const { v1, v2 } = require("./number");

// function add(x,y){
//     if((x+y)>=0){
//         return v1;
//     }
//     return v2;
// }
// function sub(x,y){
//     if((x-y)<0){
//         return v2;
//     }
//     return v1;
// }
// module.exports = {
//     add, 
//     sub  
// };

// 위 함수를 화살표 함수로 표현할 수 있다.
 module.exports.add = (x,y) =>{
    if((x+y)>=0){
        return v1;
    }
    return v2;
}

module.exports.sub = (x,y) =>{
    if((x-y)<0){
        return v2;
    }
    return v1;
}





