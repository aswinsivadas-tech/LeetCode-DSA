/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  const result = {};

  for (let item of this) {
    const key = fn(item); // fn always returns a string

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
};
