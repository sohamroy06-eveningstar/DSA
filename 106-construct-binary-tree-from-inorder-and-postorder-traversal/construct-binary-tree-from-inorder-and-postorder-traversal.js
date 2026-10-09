/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let postIndex = postorder.length-1;

    const inorderMap = new Map();
    for(let i = 0; i<inorder.length; i++) {
        inorderMap.set(inorder[i],i)
    }

    function helper(left ,right) {
        if (left > right) {
            return null;
        }
        const rootValue = postorder[postIndex];
        postIndex --;
        const root = new TreeNode(rootValue);
        const rootIndex =  inorderMap.get(rootValue);
        root.right= helper(rootIndex +1, right);
        root.left = helper (left,rootIndex -1);
        return root;
    }
    return helper(0, inorder.length-1);
};