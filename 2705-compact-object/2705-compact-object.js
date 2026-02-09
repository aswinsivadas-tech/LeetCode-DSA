/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {

    if (obj === null) return null;

    if (Array.isArray(obj)) {
        const res = [];
        for (let item of obj) {
            const compacted = compactObject(item);
            if (compacted) {
                res.push(compacted);
            }
        }
        return res;
    }

    if (typeof obj === "object") {
        const res = {};
        for (let key in obj) {
            const compacted = compactObject(obj[key]);
            if (compacted) {
                res[key] = compacted;
            }
        }
        return res;
    }

    // primitive value
    return obj ? obj : null;
};
