const object={
    task1:['Learn JS Syntax', 'Learn JS Practice', 'Write Code'],
    task2:['Learn React', 'Write Code', 'Create App'],
    task3:['Search Job', 'Offer', 'Interview']
}

function result(arr){
    return arr.map(el=>`<li class="text-warning">${el}</li>`)
}
console.log(result(object.task2))