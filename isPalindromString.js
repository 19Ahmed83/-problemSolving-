function palindrom (str){
    let pol = true;
    let str1 = str.split('');
    for(let i = 0; i < str1.length; i++){
        if(str1[i] !== str1[str1.length - 1 - i]){
            return false;
        }
    }
    return pol;
}
//console.log(palindrom('ababa'));