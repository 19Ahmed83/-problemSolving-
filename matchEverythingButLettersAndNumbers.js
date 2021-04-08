function testStr(str){
    let method =  /\W/g;
    return str.match(method);
}
console.log(testStr('@hmed meslaurov!'))