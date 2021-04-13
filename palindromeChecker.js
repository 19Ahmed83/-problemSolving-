function test(str) {
    let str1 = /[A-Za-z0-9]/gi
    let str2 = str.match(str1).reverse().join('').toLowerCase();
    console.log(str2);
    let res = str2.split('').reverse().join('').toLowerCase()
    console.log(res);
    return str2 === res;
}

console.log(test("0_0 (: /-\ :) 0-0"))