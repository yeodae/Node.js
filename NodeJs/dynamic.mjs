//dynamic.js : 동적으로 불러오는것 (선택가능)
const flg = false;

if(!flg){
    const m1 = await import ('./func.mjs'); 
    console.log(m1);
    const m2 = await import ('./func.mjs'); 
    console.log(m2);
}