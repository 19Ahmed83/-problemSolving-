let collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateObject(object, id, prop, value) {
    if (prop !== 'tracks' && value !== '') {
        object[id][prop] = value;
    } else if (prop === 'tracks' && object.hasOwnProperty('tracks') === false) {
        object[id][prop] = [value]
    } else if (prop === 'tracks' && value !== '') {
        object[id][prop].push(value);
    } else if (value === '') {
        delete object[id][prop]
    }
    return object
}

console.log(updateObject(collection, 5439, 'artist', 'ABBA'))