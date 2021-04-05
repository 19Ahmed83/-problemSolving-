function checkObj(obj, checkProp) {
    return obj.hasOwnProperty(checkProp) ? obj[checkProp] : 'Not Found';
}
console.log(checkObj({name:'Am',city:'NY',age:27},27))