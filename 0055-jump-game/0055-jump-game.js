var canJump = function(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        // if current index is beyond reachable range → fail
        if (i > maxReach) return false;

        // update farthest reachable index
        maxReach = Math.max(maxReach, i + nums[i]);
    }

    return true;
};