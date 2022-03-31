var maxDepth = function (root) {
    return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
