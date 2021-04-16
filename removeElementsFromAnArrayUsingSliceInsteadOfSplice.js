let inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

function nonMutatingSplice(inputCities){
    let arr = inputCities.slice(0,3)
    return arr
}
console.log(nonMutatingSplice(inputCities))