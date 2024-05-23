// https://leetcode.com/problems/is-object-empty/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    if (obj instanceof Array) {
        return obj.length === 0;
    }
    return Object.keys(obj).length === 0;

};

var _isEmpty = function (obj) {
    for (const _ in obj) return false;
    return true;
};