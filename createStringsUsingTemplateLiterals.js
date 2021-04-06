const result ={
    success:['max-length', 'no-amd', 'preffer-arrow-function'],
    failure:['no-var', 'var-on-top', 'linebreak'],
    skipped:['no-extra-semi', 'no-dup-keys']
};

function makeList(arr){
    const failureItems =[];
    for(let i =0; i< arr.length; i++){
        failureItems.push(`<li class="'text-warning">${arr[i]}</li>`)
    }
    return failureItems;
}
console.log(makeList(result.failure))