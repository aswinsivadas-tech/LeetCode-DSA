var leafSimilar = function(root1, root2) {
    function getLeaves(root, arr) {
        if (!root) return;
        if (!root.left && !root.right) {
            arr.push(root.val);
            return;
        }
        getLeaves(root.left, arr);
        getLeaves(root.right, arr);
    }

    let leaves1 = [];
    let leaves2 = [];
    getLeaves(root1, leaves1);
    getLeaves(root2, leaves2);

    if (leaves1.length !== leaves2.length) return false;
    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) return false;
    }
 return true;
};