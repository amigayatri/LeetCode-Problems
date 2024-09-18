/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
    this.data = {};
    this.prefix = '';

    for (let i = 0; i < sentences.length; i++) {
        this._insert(sentences[i], times[i]);
    }
};

AutocompleteSystem.prototype._insert = function(sentence, times) {
    let current = this.data;

    // add each sentence to the Trie
    for (let i = 0; i < sentence.length; i++) {
        let l = sentence[i];
        if (current[l] == null) {
            current[l] = {};
        }
        current = current[l];
    }

    // add times when sentence is finished, also used as the end of the sentence
    current.times = (current.times || 0 ) + times;
}

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    if (c == '#') {
        // once input finished, need to add as a new search sentence and clean prefix history
        this._insert(this.prefix, 1);
        this.prefix = ''; 
        return [];
    }

    let current = this.data;
    let results = [];
        
    // find the current node based on prefix
    for (let l of this.prefix) {
        current = current[l];
        if (current == null) break;
    }

    // add to the prefix
    this.prefix += c;

    // check if the current 
    if (current == null || current[c] == null) {
        return [];
    }

    // get the current node
    current = current[c];

    // use DFS to find all possible sentences based on current prefix
    dfs(current, this.prefix, results);

    // for all results, sort by times descending and then by letter order
    results.sort((a, b) => {
        if (a[1] == b[1]) {
            // if two sentences with the same times, display by ASCII order
            for (let i = 0; i < a[0].length; i++) {
                if (i >= b[0].length) return 1;
                
                if (a[0].charCodeAt(i) < b[0].charCodeAt(i)) {
                    return -1;
                } else if (a[0].charCodeAt(i) > b[0].charCodeAt(i)) {
                    return 1;
                }
            }

            return -1;
        }

        return b[1] - a[1];
    });

    // crop to show top 3
    return results.map(r => r[0]).splice(0, 3);
};

// starting from the current root, find all possible ending sentences and add it with prefix and times to the results
var dfs = function(root, prefix, results) {
    if (root == null) return;
    
    if (root.times != null) {
        results.push([prefix, root.times]);
    }
    
    for (let node in root) {
        dfs(root[node], prefix + node, results);
    }
}
