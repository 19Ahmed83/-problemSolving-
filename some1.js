function app(arr) {
    return arr.some(el => el.lenght !== 0)
}

console.log(app(['apple', 'orange', 'apricot']))