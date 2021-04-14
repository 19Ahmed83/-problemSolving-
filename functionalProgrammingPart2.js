const prepareBlackTea = () => 'blackTea';
const prepareGreenTea = () => 'greenTea';

const getTea = (prepare, numOfCups) => {
    let arr = [];
    for (let i = 0; i < numOfCups; i++) {
        arr.push(prepare())
    }
    return arr
}
const blackTea = getTea(prepareBlackTea, 8);
const greenTea = getTea(prepareGreenTea, 5)

console.log(blackTea);
console.log(greenTea);