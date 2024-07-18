// Write a function to find the largest number in an array?

class Solution {
    isLargest(arr){
        // If arr length = 0 then return 0
        if (arr.length === 0) return 0;

        // Initializing the largest value with index 0, considering as largest
        let largest = arr[0];

        // Iterate over the given arr
        for(let num of arr){
            // If current value > largest then it will become new largest value
            if(num > largest){
                largest = num
            }
        }

        // Return largest integer
        return largest
    }
}

const arr = [28,91, 23, 57, 71, 88, 35, 64, 54, 61, 92]

const solution = new Solution()
console.log(solution.isLargest(arr));

/**
 *  @ Time Complexity: O(n)
 *  @ Space Complexity: O(1)
 */

