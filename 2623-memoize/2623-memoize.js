function memoize(fn) {
    const cache = new Map(); // to store results

    return function (...args) {
        const key = JSON.stringify(args); // unique key for arguments

        if (cache.has(key)) {
            return cache.get(key); // return cached value
        }

        const result = fn(...args); // call original function
        cache.set(key, result);     // store result
        return result;
    };
}
