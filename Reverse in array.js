function app(n){
    let arr=[];
    let last;
    do {
        last = n % 10;
        arr.push(last);
        n = (n - last) / 10;
    }while(n>0)
    return arr
}
console.log(app(123))//[3,2,1]