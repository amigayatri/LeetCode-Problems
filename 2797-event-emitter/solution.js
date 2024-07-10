class EventEmitter {
    constructor () {
        this.events = {}
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) { 
        if (!(eventName in this.events)) {
            this.events[eventName] = new Set([callback])
        } else {
            this.events[eventName].add(callback)
        }        
        return {
            unsubscribe: () => {
                this.events[eventName].delete(callback)
                if (this.events[eventName].size === 0) delete this.events[eventName]
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (this.events[eventName] === undefined) return []
        const res = []
        this.events[eventName].forEach(fn => res.push(fn(...args)))
        return res
    }
}
