var TrieNode = function () {
    this.children = {};
    this.isEnd = false;
}



var WordDictionary = function() {
    this.root = new TrieNode()
    
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let current = this.root;
    for (let char of word) {
        if(!current.children[char]) {
            current.children[char] = new TrieNode();
        }
        current= current.children[char];
    }
    current.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    function dfs (index,node) {
        if(index ===  word.length) {
            return node.isEnd;
        }
        const char = word[index];

        if(char === ".") {
            for(let key in node.children){
                if(dfs(index + 1,node.children[key])) {
                    return true;
                }
            }
            return false;
        }
        if(!node.children[char]) {
            return false;
        }
        return dfs(index + 1,node.children[char])
    }
    return dfs( 0,this.root)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */