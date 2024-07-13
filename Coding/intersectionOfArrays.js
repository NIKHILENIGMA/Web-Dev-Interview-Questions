// Write a function to find the intersection of two arrays?
/**
 * 
 * Input:
Array 1: [1, 2, 2, 3, 4]
Array 2: [2, 2, 3, 5]
Output: [2, 3] 
(if duplicates are not considered) or [2, 2, 3] (if duplicates are considered).
 */



class Solution {
    withDuplication(arr1, arr2){
        // Using Map data structure
        const map = new Map();
        const result = []

        for(let item of arr1) {
            map.set(item,(map.get(item) || 0) + 1)
        }

        for(let item of arr2) {
            if(map.has(item) && map.get(item) > 0){
                result.push(item);
                map.set(item, map.get(item) - 1)
            }
        }

        return result 

    }
    withOutDuplication(arr1, arr2){
        const set1 = new Set(arr1)
        const set2 = new Set(arr2);
        const result = []

        for(let item of set1){
            if(set2.has(item)){
                result.push(item)
            }
        }

        return result


    }
}


const arr1 = [1, 2, 2, 3, 4]
const arr2 = [2, 2, 3, 5]

const solution = new Solution()
console.log(solution.withDuplication(arr1, arr2));
console.log(solution.withOutDuplication(arr1, arr2));