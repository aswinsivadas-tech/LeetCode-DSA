var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;

    const freq1 = {};
    const freq2 = {};
    for (let ch of word1) {
        freq1[ch] = (freq1[ch] || 0) + 1;
    }

    for (let ch of word2) {
        freq2[ch] = (freq2[ch] || 0) + 1;
    }
    const keys1 = Object.keys(freq1).sort();
    const keys2 = Object.keys(freq2).sort();

    if (keys1.join("") !== keys2.join("")) return false;

    const values1 = Object.values(freq1).sort((a, b) => a - b);
    const values2 = Object.values(freq2).sort((a, b) => a - b);

    for (let i = 0; i < values1.length; i++) {
        if (values1[i] !== values2[i]) return false;
    }

    return true;
};