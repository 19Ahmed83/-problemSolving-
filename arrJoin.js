function join(arr){
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === 'string'){
            arr1.push(arr[i]);
        }
    }
    return arr1.join(' ');

}
//console.log(join([23, 5, true, 'hello', 'how are you', 56, 'Alice', '?']));