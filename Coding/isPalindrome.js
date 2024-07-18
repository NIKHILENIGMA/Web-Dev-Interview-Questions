// Function that checks whether a given string is a palindrome or not?


class Solution {
    isPalidrome(str){
        if(str.length < 0) return "Not a palindrome";
        
        return str === str.split("").reverse().join("") ? "Palindrome" : "Not a palindrome"
    }
}

const str = "addaa"
const solution = new Solution()
console.log(solution.isPalidrome(str));