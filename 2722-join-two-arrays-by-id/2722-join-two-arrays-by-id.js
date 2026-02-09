var join = function(arr1, arr2) {
    const map = new Map();

    // Put all objects from arr1 into map
    for (let obj of arr1) {
        map.set(obj.id, { ...obj });
    }

    // Merge objects from arr2
    for (let obj of arr2) {
        if (map.has(obj.id)) {
            // arr2 overrides arr1
            map.set(obj.id, { ...map.get(obj.id), ...obj });
        } else {
            map.set(obj.id, { ...obj });
        }
    }

    // Convert map values to array and sort by id
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};
