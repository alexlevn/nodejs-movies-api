function paginate(data, size, page) {
    let index = page - 1;
    // Get array from array: slice(from index, to index)
    return data.slice(index * size, (index + 1) * size);
}

module.exports =  paginate;