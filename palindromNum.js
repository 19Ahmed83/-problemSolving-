const palindrom = (number) =>{
    let str = '';
    let num = number.toString();
    for(let i = 0; i < num.length; i++){
        str = num[i] +str;
        if(+str === number)
            return 'is palindrom'
    }
    return 'is not palindrom'
}
console.log(palindrom(121))