const palindrom = (arr) => {
    let newArr = [];
    for (let el of arr) {
        let str = '';
        for (let i = 0; i < el.length; i++) {
            str = el[i] + str
        }
        if (str === el) {
            newArr.push(el)
        }
    }
    return newArr
}
console.log(palindrom(['mum', 'nun', 'hello', 'dood']))