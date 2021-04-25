const truthCheck = (collection, pre) => {
    for (let i = 0; i < collection.length; i++) {
        if (collection.every(el => el[pre])) {
            return true
        }
    }
    return false
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"},
    {"user": "Dipsy", "sex": "male"},
    {"user": "Laa-Laa", "sex": "female"},
    {"user": "Po", "sex": "female"}], "sex"))