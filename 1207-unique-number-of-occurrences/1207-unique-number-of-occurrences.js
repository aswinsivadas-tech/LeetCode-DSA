var uniqueOccurrences = function(arr) {
    const freq = {};

    // Step 1: Count frequency
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    // Step 2: Check uniqueness of frequencies
    const counts = Object.values(freq);
    const set = new Set(counts);

    return counts.length === set.size;
};