class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage]
    this.size = 1
    this.ptr = 0
    this.last = 0
  }

  visit(url) {
    while (this.ptr < this.size-1) {
        this.history.pop()
        this.size--
    }
    this.history.push(url)
    this.size++
    this.ptr++
    return this.history[this.ptr]
  }

  back(steps) {
    if (this.ptr - steps < 0) {
        this.ptr = 0
    } else {
        this.ptr -= steps
    }
    return this.history[this.ptr]
  }

  forward(steps) {
    if (this.ptr + steps > this.size-1) {
        this.ptr = this.size-1
    } else {
        this.ptr += steps
    }

    return this.history[this.ptr]
  }
}

