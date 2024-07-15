// Write a function that checks whether two strings are anagrams or not?

/**
 * Input 
 * str1 = listen
 * str2 = silent
 * 
 * Ouput:
 * return True
 */

class Solution {
    isAnagram(str1, str2){
        // both string lengths are different then return false
        if(str1.length !== str2.length){
            return false;
        }

        const container = {};

        for(let char of str1){
            container[char] = (container[char] || 0) + 1;
        }
        // return container
        for(let char of str2){
            
            console.log("value: ",container[char]--);
            if (!container[char]) {
                return false;
            }
            container[char]--
        }

        return true
        
    }
}

const str1 = "hello"
const str2 = "world"
const solution = new Solution()
console.log(solution.isAnagram(str1, str2));