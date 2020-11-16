function app(arr) {
    return arr.filter(el => typeof (el) === 'string' && el.length === 4);
}

console.log(app(['qwe', 45, '657', 21, 'sdgsd', 'errt']));