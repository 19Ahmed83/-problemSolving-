function modern(arr){
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            arr1.push(arr[i] + '')
        }else if(arr[i] !== 0){
            arr1.push(-arr[i]);
        }
    }
    return arr1;
}
//console.log(modern([23, 5, 6, 12, 8]))