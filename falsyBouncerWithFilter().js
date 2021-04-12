function bouncer(arr) {
    return arr.filter(Boolean)
}

console.log(bouncer([3, '', false, 'hello']))