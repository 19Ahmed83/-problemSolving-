const sumIndex= (arr)=>{
    return Array.from(arr.entries()).map(el=>typeof(el[0])==='number'?el[0]:null).reduce((a,b)=>a+b,0)
}
console.log(sumIndex(['er',4,true]))