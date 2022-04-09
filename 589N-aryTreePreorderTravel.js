/* PROBLEM 
Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]

Definition for a Node.
  function Node(val, children) {
    this.val = val;
    this.children = children;
};

REPHRASE, given a root, return an array of all values as a depth-first-search
PSEUDOCODE, 


RUNTIME:104MS MEMORY:45MB TIME-TO-SOLUTION:50 MINS
*/

// RECURSIVE SOLUTION
var preorder = function(root, ans=[]) {
    if (!root) return ans;
    ans.push(root.val);
    for (let child of root.children)
        preorder(child, ans)
    return ans;
}

// ITERATIVE SOLUTION CREDIT https://leetcode.com/problems/n-ary-tree-preorder-traversal/discuss/291542/two-solutions-JavaScript
var preorder = function(root) {
    const stack = [];
    const result = [];
    if (!root) {
        return result;
    }
    stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        result.push(node.val);
        for(let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }
    return result;
};