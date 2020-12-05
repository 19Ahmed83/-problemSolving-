function app(n){
    let arr=[];
    let last;
    do{
        last=n%10;
        n=(n-last)/10
        if(last%2===0){
            arr.unshift(last);
        }
    }while(n>0)
    return arr;
}
console.log(app(45678))//[4, 6, 8]