import { v1, v2 } from './number.mjs';
import calc from './calc.mjs';

// number 모듈을 사용해서 v1과 v2를 출력
console.log("v1 ==>",v1); // "양수"
console.log("v2 ==>",v2); // "음수"

function mul(x, y){
    if(x*y >= 0){
        return v1;
    }
    return v2;
}
export default mul;
// calc 모듈의 add 함수를 실행하고 그 결과를 출력
const resultAdd = calc.add(2, 3);
const resultSub = calc.sub(2, 3);
const resultMul = mul(2, -3);
console.log("덧셈 ==>",resultAdd); // "양수"
console.log("뺄셈 ==>",resultSub); // "양수"
console.log("곱셈 ==>",resultMul); // "양수"