const dubl = (arr) => {
    return Array.from(arr.entries()).filter(el=>el[1]==='rt').map(el=>el[0])
}
console.log(dubl(['34', 'rt', '5', 'r', 4, 'rt']))