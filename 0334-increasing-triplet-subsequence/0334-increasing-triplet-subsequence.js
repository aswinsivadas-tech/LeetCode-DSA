/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num;           // update smallest
        } else if (num <= second) {
            second = num;          // update second smallest
        } else {
            // num > first and num > second
            return true;           // triplet found
        }
    }

    return false;
};
