const convert = (num) => {
    let str = num.toString();
    return num > 9 && num <= 99 ? [+str[0], +str[1]] : "The number is not two-digit";
}
console.log(convert(17))