var cancellable = function(fn, args, t) {
    let timerId = null
    fn(...args)
    const startInterval = () => {
        timerId = setTimeout(() => {
            fn(...args)
            startInterval()
        }, t)
    }
    startInterval()
    const cancelInterval = () => {
        if (timerId !== null) clearInterval(timerId)
    }
    return cancelInterval
};
