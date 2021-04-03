function testNotEqual(val) {
    if (val !== 99) {
        return 'Not equal';
    }
    return 'Equal';
}

console.log(testNotEqual(10))