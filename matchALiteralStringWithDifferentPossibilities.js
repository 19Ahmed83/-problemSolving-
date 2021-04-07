function testString(str){
    let all=/dog|cat|fish|bird/
    return all.test(str)
}
console.log(testString("James has a pet cat."))