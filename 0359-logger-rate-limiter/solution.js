
const Logger = function () {
	this.set = new Set();
    this.queue = []
};

Logger.prototype.shouldPrintMessage = function (timestamp, message) {
    let aux = {}
    while (this.queue.length !== 0) {
        aux = this.queue[0]
        if (timestamp - aux.timestamp >= 10) {
            this.queue.shift()
            this.set.delete(aux.message)
        } else {
            break;
        }
    }
    if (!this.set.has(message)) {
        this.set.add(message)
        this.queue.push({timestamp, message})
        return true
    } else {
        return false
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
