function twoMax(arr1,arr2){
    let max1 = Math.max(...arr1);
    let max2 = Math.max(...arr2);
    return [max1,max2]
}
//console.log(twoMax([2, 5, 8, 5, -5, 13],[6, 4, -8, 45, 0])) ===>[13,45]