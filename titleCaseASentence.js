function test(str){
    return str.split(' ').map(el=>el[0].toUpperCase()+el.substr(1).toLowerCase()).join(' ')
}
console.log(test('hello world, how are you?'))