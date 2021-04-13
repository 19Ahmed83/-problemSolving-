function twoMax2(arr1,arr2){
    let arr = arr1.concat(arr2);
    arr.sort((a,b)=>b-a);
    return [arr[1],arr[0]];
}
console.log(twoMax2([2, 5, 8, 5, -5, 13],[6, 4, -8, 45, 0]))