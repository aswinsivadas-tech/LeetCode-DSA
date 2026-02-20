var equalPairs = function(grid) {
    const n = grid.length;
    const map = new Map();
    let count = 0;

    for (let i = 0; i < n; i++) {
        const rowKey = grid[i].join(',');
        map.set(rowKey, (map.get(rowKey) || 0) + 1);
    }

    for (let col = 0; col < n; col++) {
        let columnArr = [];
        for (let row = 0; row < n; row++) {
            columnArr.push(grid[row][col]);
        }

        const colKey = columnArr.join(',');
        if (map.has(colKey)) {
            count += map.get(colKey);
        }
    }

    return count;
};