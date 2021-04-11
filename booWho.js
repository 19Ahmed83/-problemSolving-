function test(bool) {
    return bool === true || bool === false ? true : false
}

console.log(test(null))