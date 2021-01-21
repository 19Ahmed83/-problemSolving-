//Find max element and index for methods

const find=(arr)=>{
    let max = Math.max(...arr)
    let index=arr.indexOf(max)
    return [max,index]
}
console.log(find([12, 90, 5, 34, 0, 90]))