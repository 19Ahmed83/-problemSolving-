let foods = {
    apples:15,
    oranges:13,
    strawberries:17,
    bananas:13
}
function checkInventory(scannedItem){
    return foods[scannedItem]
}
console.log(checkInventory('apples'))