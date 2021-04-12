function Animals(name) {
    this.name = name;
    this.year = 2
}

let bird = new Animals('Gif');
let ownProps = [];
for (let property in bird) {
    if (bird.hasOwnProperty(property)) {
        ownProps.push(property)
    }
}
console.log(ownProps)