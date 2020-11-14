function palindrom (num){
    let pol = true;
    let str = num.toString().split('');
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }
    return pol;
}
console.log(palindrom (123321));