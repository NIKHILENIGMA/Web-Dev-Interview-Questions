// Write a function to check if an array is sorted in ascending order or not?
/**
 * @params{Array}
 * @params{Number}
 *
 * @returns {Boolean}
 */

class Solution {
  isArrIsSortedInAscending(arr, N) {
    // Return if arr length is zero
    if (N === 0) return 0;

    // Iterate over the arr
    for (let i = 0; i < N; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }

    return true;
  }
}

const arr = [1, 2, 3, 4, 5];

const solution = new Solution();
console.log(solution.isArrIsSortedInAscending(arr, arr.length));
