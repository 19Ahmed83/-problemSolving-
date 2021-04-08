function testStr(str){
    let count=/\S/g;
    return str.match(count)
}
console.log(testStr('We are learn JS'))