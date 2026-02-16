/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function(nums) {
    let write = 0;

    // Move all non-zero elements forward
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[write] = nums[i];
            write++;
        }
    }

    // Fill the rest with zeros
    while (write < nums.length) {
        nums[write] = 0;
        write++;
    }
};
