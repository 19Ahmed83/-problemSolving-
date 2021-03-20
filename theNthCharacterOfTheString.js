function getCharacter(str,n){
    return n >= str.length && n === -1 ? "Error" : str[n];
}
console.log(getCharacter('dgdg',4))