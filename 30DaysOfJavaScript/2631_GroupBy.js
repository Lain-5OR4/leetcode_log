// https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    res = {};
    for (const i of this) {
        const key = fn(i);
        res[key] ||= [];
        res[key].push(i);
    }
    return res;

};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

Array.prototype.groupBy = function (fn) {
    return this.reduce((grouped, item) => {
        const key = fn(item);

        grouped[key] ||= [];

        grouped[key].push(item);

        return grouped;
    }, {});

};
