/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(node === null) {
        return null;
    }
    const visited = new Map() ;

    function dfs(current){
        if(visited.has(current)) {
            return visited.get(current)
        }
        const Clone = new _Node(current.val)
        visited.set(current,Clone)

        for (let neighbor of current.neighbors ) {
            Clone.neighbors.push(dfs(neighbor))
        }
        return Clone;
    }
    return dfs(node);
};