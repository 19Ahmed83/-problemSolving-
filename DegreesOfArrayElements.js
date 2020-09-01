function powerArray(arr){
    let newArr = [];
    for(let el of arr){
        if(el % 2 === 0){
            newArr.push(Math.pow(el,2));
        }else if(el % 2 !== 0){
            newArr.push(Math.pow(el,3));
        }
    }
    return newArr;
}//console.log(powerArray([1, 2, 3, 5])) === [1, 4, 27, 125]