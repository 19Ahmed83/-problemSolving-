function insert(str) {
    let str1 = '';
    for (let i = 0; i < str.length; i++) {
        str1 = str1 + str[i] + ' ';
    }
    return str1;
}

console.log(insert('hello'))