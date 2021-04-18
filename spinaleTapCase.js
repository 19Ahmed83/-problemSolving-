function spinaleCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

console.log(spinaleCase("The_Andy_Griffith_Show"))