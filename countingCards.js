function cc(card) {
    let count = 0;
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    return count > 0 ? count + ' ' + 'Bet' : count + ' ' + 'Hold';
}

console.log(cc(5))