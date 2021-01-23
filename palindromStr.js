const palindrom = (str) => {
    let str1 = '';
    for (let i = 0; i < str.length; i++) {
        str1 = str[i] + str1;
        if (str1 === str)
            return 'is palindrom';
    }
    return 'is not palindrom'
}
console.log(palindrom('madam'))