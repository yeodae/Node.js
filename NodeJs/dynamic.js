//dynamic.js : 동적으로 불러오는것 (선택가능)
const flg = false;

if(flg){
    require('./func');
}
console.log(require.cache);