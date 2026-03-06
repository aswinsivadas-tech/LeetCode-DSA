var SmallestInfiniteSet = function() {
    this.current = 1;
    this.added = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {

    if (this.added.size > 0) {
        let smallest = Math.min(...this.added);
        this.added.delete(smallest);
        return smallest;
    }

    return this.current++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {

    if (num < this.current && !this.added.has(num)) {
        this.added.add(num);
    }
};