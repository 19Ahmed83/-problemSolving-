function oppositeArray(arr){
    let newArr = [];
    for(let el of arr){
        if(el >= 0 || el <= 0){
            newArr.push(el * -1);
        }
    }
    return newArr;
}