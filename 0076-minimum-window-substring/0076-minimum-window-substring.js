/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return "";

    let need = new Map();
    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let left = 0;
    let count = t.length; // total chars needed
    let minLen = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        if (need.has(char)) {
            if (need.get(char) > 0) count--;
            need.set(char, need.get(char) - 1);
        }

        // when all chars are matched
        while (count === 0) {
            // update result
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            let leftChar = s[left];

            if (need.has(leftChar)) {
                need.set(leftChar, need.get(leftChar) + 1);
                if (need.get(leftChar) > 0) count++;
            }

            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};