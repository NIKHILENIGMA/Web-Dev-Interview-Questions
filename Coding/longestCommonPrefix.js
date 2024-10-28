// Function to find the longest common prefix among an array of strings?
/**
 * @param {string[]} strs
 * @return {string}
 *
 * Example:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 */

class Solution {
  longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix === "") return "";
      }
    }
    return prefix;
  }
}

// const solution = new Solution();
// console.log(solution.longestCommonPrefix(["flower", "flow", "flight"]));

// write example for this question // Function to find the longest common prefix among an array of strings? with input and output on leetcode do not solve the question only write the question

