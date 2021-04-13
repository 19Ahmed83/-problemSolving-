function nearestPoint(a, b, c) {
    if (Math.abs(a - b) === Math.abs(a - c)) {
        return 'distances are equal';
    } else if (Math.abs(a - b) < Math.abs(a - c)) {
        return 'b';
    } else return 'c'
}

console.log(nearestPoint(1, 2, 0))
