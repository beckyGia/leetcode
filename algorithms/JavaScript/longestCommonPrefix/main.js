// Source : https://leetcode.com/problems/longest-common-prefix/
// Author : Becky Gia
// Date   : 2022-07-26

/********************************************************************************** 
* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*               
**********************************************************************************/

//My Solution:

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs[0] || strs.length == 1) return strs[0] || "";
  let i = 0;
  while (strs[0][i] && strs.every((w) => w[i] == strs[0][i])) {
    i++;
  }
  return strs[0].substring(0, i);
};
