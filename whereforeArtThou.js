function whatIsInAName(collection, source) {


    let res;
    let keys = Object.keys(source);

    function check(el) {
        for (let i = 0; i < keys.length; i++) {
            if (el.hasOwnProperty(keys[i]) && el[keys[i]] === source[keys[i]]) {
                res = true;
            } else res = false;
        }
        return res
    }


    return collection.filter(check)
}

console.log(whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
    first: "Tybalt",
    last: "Capulet"
}], {last: "Capulet"}));


