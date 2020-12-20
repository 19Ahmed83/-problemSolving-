function app(arr){
    return arr.map((el,index)=>index%2===0?el/2:el)
}
console.log(app([4, 5, 7, 4, 0]))