class Codec {
    constructor() {

    }

    /** 
     * @param {_Node|null} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function (root) {
        const vals = []
        
        const dfs = (node)=>{
            if(!node){
                return;
            }
            
            vals.push(node.val)
            
            if(node.children.length){
                vals.push(node.children.length)
                
                for(const child of node.children){
                    dfs(child)
                }
                
            } else {
                vals.push(0)
            }
        }
        
        dfs(root)
        
        return vals.join(',')
    };

    /** 
     * @param {string} data 
     * @return {_Node|null}
     */
    // Decodes your encoded data to tree.
    deserialize = function (data) { 
        if(!data){
            return null
        }
        
        const vals = data.split(',').map(d=>+d)
        
        const dfs = ()=>{
            if(!vals.length){
                return null
            }
            
            const val = vals.shift()
            
            const node = new Node(val, [])
            
            const numOfChildren = vals.shift();
            
            for(let i = 0; i < numOfChildren; i++){
                const child = dfs();
                node.children.push(child)
            }
            
            return node;
        }
        
        return dfs()
    };
}
