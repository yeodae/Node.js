console.log(this);
console.log(this === module.exports);
console.log(this === exports);
function test(){
    console.log('function', this === exports, this === global);
}
test();