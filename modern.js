function modern(arr){
    return arr.map(el => el % 2 === 0?el + '':-el );
}
// console.log(modern([23, 5, 6, 12, 8]));