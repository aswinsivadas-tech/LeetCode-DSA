var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration
 * @return {boolean}
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const expireAt = now + duration;

    let existed = false;

    if (this.cache.has(key)) {
        const entry = this.cache.get(key);
        if (entry.expireAt > now) {
            existed = true; // un-expired key existed
        }
    }

    this.cache.set(key, { value: value, expireAt: expireAt });
    return existed;
};

/** 
 * @param {number} key
 * @return {number}
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();

    if (!this.cache.has(key)) return -1;

    const entry = this.cache.get(key);

    if (entry.expireAt <= now) {
        this.cache.delete(key); // clean expired key
        return -1;
    }

    return entry.value;
};

/** 
 * @return {number}
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;

    for (let [key, entry] of this.cache) {
        if (entry.expireAt > now) {
            count++;
        } else {
            this.cache.delete(key); // remove expired keys
        }
    }

    return count;
};
