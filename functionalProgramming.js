const prepeareTea = () => 'greenTea';

const getTea = (numOfCups) => {
    let arr = [];
    for (let cups = 1; cups <= numOfCups; cups++) {
        arr.push(prepeareTea())
    }
    return arr
}
const team = getTea(6)
console.log(team)