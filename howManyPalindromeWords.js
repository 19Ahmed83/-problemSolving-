const palindrom= (arr)=>{
    let count = 0;
    for(let el of arr){
        let str = '';
        for(let i = 0;i<el.length;i++){
            str=el[i]+str
        }
        if(str===el){
            count++
        }
    }
    return count
}
console.log(palindrom(['mum', 'nun', 'hello', 'dood']))