
var FileSystem = function() {
    this.struct = {};
};

/** 
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function(path) {
    const DIR = path.split('/');
    let curr = this.struct,
        file='';
    for(let i=0;i<DIR.length;i++){
        const dir = DIR[i];
        if(dir.length==0) continue;        
        if(!curr[dir]){
            return false;
        }
        if(i==DIR.length-1 && typeof(curr[dir]) == "string") {
            file=dir;
            break;
        }
        curr = curr[dir];
    }  
    if(typeof(curr[file]) == "string"){
        return [file];
    }
    return Object.keys(curr).sort();   
};

/** 
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function(path) {
    const DIR = path.split('/');
    let curr = null;
    for(let dir of DIR){
        if(dir.length==0){
            curr = this.struct;
        }
        else {
            if(!curr[dir])
                curr[dir] = {};
            curr = curr[dir];
        }
    }
    return;
};

/** 
 * @param {string} filePath 
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function(filePath, content) {
    const DIR = filePath.split('/');
    let curr = null;
    for(let i=0;i<DIR.length;i++){
        const dir = DIR[i];
        if(dir.length==0){
            curr = this.struct;
        }
        else if(i==DIR.length-1){
            if(!curr[dir])
                curr[dir] = content;
            else {
                curr[dir] = curr[dir]+content;
            }
        }
        else {
            if(!curr[dir])
                curr[dir] = {};
            curr = curr[dir];
        }
    }   
    return true;
};

/** 
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function(filePath) {
    const DIR = filePath.split('/');
    let curr = this.struct;
    for(let i=0;i<DIR.length;i++){
        const dir = DIR[i];                
        if(dir.length==0) continue;        
        if(typeof(curr[dir]) == "object" ){
            curr = curr[dir];
        }
        else if(typeof(curr[dir]) == "string"){
            return curr[dir];
        }
    }
    return false;
};
