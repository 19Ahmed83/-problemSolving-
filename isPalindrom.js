function isPalindrom (numstr){
    let palindrom = true;
    let str = numstr.split('');
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }
    return palindrom;
}
console.log(isPalindrom ('123321'))