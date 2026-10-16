/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
 const result = [];
 if(!root) return result;
 const queue =[root];
 let head = 0;
    while( head < queue.length) {
        const end = queue.length;
        let sum = 0;
        const start = head;

  while (head < end) {
    const node = queue[head++];
    sum += node.val;
        if(node.left) 
            queue.push(node.left)
        
        if(node.right) 
            queue.push(node.right)
        
    }
    result.push(sum / (end - start)) ;
    }
    return result;
};