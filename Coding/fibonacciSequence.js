// Write a function to calculate the Fibonacci sequence up to a given number?
/**
 * @params {N}
 * @return {N}
 */


class Solution {
    fibonacci(N){
        // if N = 1 then return 
        if (N === 0) return 0
        if (N === 1) return 1
        return this.fibonacci(N - 1) + this.fibonacci(N - 2)
    }
}


const number = 4
const solution = new Solution();
console.log(solution.fibonacci(number));