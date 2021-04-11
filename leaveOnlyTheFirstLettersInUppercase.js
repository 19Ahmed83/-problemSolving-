function test(str) {
    return str.split(' ').map(el => el[0].toUpperCase().slice(0, 1)).join(' ')
}

console.log(test('hello  it is my code '))
