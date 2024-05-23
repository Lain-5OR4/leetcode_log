// https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
let sortBy = (arr, fn) => {
    return arr.sort((a, b) => fn(a) - fn(b));
}


// merge sort
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */// merge sort
var _sortBy = function (arr, fn) {
    const n = arr.length;
    // base case
    if (n == 1) return arr;

    // divide
    const mid = Math.floor(n / 2);
    const arrLeft = arr.slice(0, mid);
    const arrRight = arr.slice(mid, n);

    // sort and merge 
    return merge(sortBy(arrLeft, fn), sortBy(arrRight, fn), fn);
};

/**
 * @param {Array} left
 * @param {Array} right
 * @param {Function} fn
 * @return {Array}
 */// merge function
function merge(left, right, fn) {
    const sortedArray = [];
    while (left.length > 0 && right.length > 0) {
        // sort and merge
        if (fn(left[0]) < fn(right[0])) {
            sortedArray.push(left[0]);
            left.shift();
        } else {
            sortedArray.push(right[0]);
            right.shift();
        }
    }

    return sortedArray.concat(left, right);
}

// quick sort
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */// using quick sort
var __sortBy = function (arr, fn) {
    // function quick sort
    const quickSort = (arr, leftBound = 0, rightBound = arr.length - 1) => {
        if (leftBound < rightBound) {
            const pivotIdx = partition(arr, leftBound, rightBound);
            quickSort(arr, leftBound, pivotIdx - 1);
            quickSort(arr, pivotIdx, rightBound);
        }
        return arr;
    }

    // function partition
    const partition = (arr, left, right) => {
        const pivot = fn(arr[Math.floor((right + left) / 2)]);
        while (left <= right) {
            while (fn(arr[left]) < pivot) left++;
            while (fn(arr[right]) > pivot) right--;

            if (left <= right) {
                // swap
                const temp = arr[right];
                arr[right] = arr[left];
                arr[left] = temp;

                left++;
                right--;
            }
        }

        return left;
    }

    return quickSort(arr);
}
