function choice(items){
    let max = items.length;
    let index = Math.floor((Math.random()) * max);
    return items[index];
}

function remove(items, item){
    let index = items.indexOf(item);
    if (index > -1){
        items.splice(index, 1);
    }
}

export { choice, remove };