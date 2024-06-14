class WordDictionary {
    constructor(){
        this.dictionary = new Map();
    }

    addWord(word){
        const { length } = word;
        if(!this.dictionary.has(length)) {
            this.dictionary.set(length, new Set());
        }
        this.dictionary.get(length).add(word);
    }

    search(word){
        if(!this.dictionary.has(word.length)) return false;
        
        const list = this.dictionary.get(word.length);
        if(!word.includes('.')) return list.has(word);
        
        for(const candidateWord of list){
            let match = true;

            for(let i = 0; i < word.length; i++) {
                 if(word[i] !== '.' && word[i] !== candidateWord[i]){
                    match = false;
                    break;
                }
            }

            if(match) return true;
        }
        
        return false;
    }
}
