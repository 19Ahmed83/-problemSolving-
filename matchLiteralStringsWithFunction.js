function name(str){
    let word = /Waldo/;
    return word.test(str)?'Yes it is':'No'
}
console.log(name("Somewhere Waldo is hiding in this text."))