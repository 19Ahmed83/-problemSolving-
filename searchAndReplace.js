function myReplace(str, before, after) {
    let index = 0;
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === before) {
            index = arr.indexOf(arr[i])
            arr.splice(index, 1, after)
        }
        if (/^[A-Z]/.test(before)) {
            after = after[0].toUpperCase() + after.substring(1);
        } else {
            after = after[0].toLowerCase() + after.substring(1)
        }
    }
    return arr.join(' ')
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))