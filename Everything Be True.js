function truthCheck(collection, pre) {
    return collection.every(el => el[pre] !== undefined && el[pre] !== null && el[pre] !== '' && !!el[pre])
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {
        "user": "Dipsy",
        "sex": "male",
        "age": 3
    },
        {
            "user": "Laa-Laa",
            "sex": "female",
            "age": 5
        },
        {
            "user": "Po",
            "sex": "female",
            "age": 4
        }],
    "age"))