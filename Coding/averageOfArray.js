// Write a function to find the average of an array of numbers?
/**
 * @params {Array}
 * @params {Number}
 * @return {Number}
 */


class Solution {
  // Write a function to find the average of an array of numbers?
  findTheAverageOfArray(arr, N){
    // If arr is empty then return
    if(N === 0) return 0;

    const totalIntegers = N;
    let totalSum = 0;
    
    for(let num of arr){
      totalSum += num
    }  

    // Get the average by dividing the total sum by arr length
    return `Avg of number${Math.round(totalSum / totalIntegers)}`

  }
}

const arr = []

const solution = new Solution();
const result = solution.findTheAverageOfArray(arr, arr.length)
console.log(result)
