function minSum (arr){
    let sum = 0;
    let newArr = arr.sort((a,b)=>b - a);
    for(let i = 0; i < newArr.length; i++){
        sum = sum + (newArr[i] * newArr[newArr.length - 1 - i])/2;
    }
    return sum;
}
//console.log(minSum([12,6,10,26,3,24]))===> 342;