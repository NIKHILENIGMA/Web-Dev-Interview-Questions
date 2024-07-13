// Write a function to calculate the factorial of a number?

/**
 * 
 * @params {Number}
 * 
 * @returns {Number}
 * 
 */


class Solution {
    factorial1(N){
        // if number is 0 or 1 then return 1
        if(N === 0 || N === 1) return 1;
        
        // if number is 2 then return 2 
        if (N === 2) return 2;        
        
        let multiple = 1;
        let i = 1
        
        while(i <= N){
            multiple *= i;
            i++;
            console.log('N value: ',(i));
            console.log('multiple value: ',multiple);
        }

        return multiple;
        
    }
    
    factorial2(N){
        if (N < 0) return -1
        if(N === 0 || N === 1) return 1;

        console.log("Factorial N: ",N);
        console.log("this.call : ",(N - 1));
        // console.log("Factorial value: ",N * this.factorial2(N - 1));
        return N * this.factorial2(N - 1)

        
    }
}

const N = 10
const solution =  new Solution()
// console.log(solution.factorial1(N));
console.log(solution.factorial2(N));

