/*
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
*/

// first solution with rephrase, questions, and whiteboard pseudocode like interview environment total time 25mins
var firstSolution = function(low, high) {
    let count = 0;
    for (let i = low; i <= high; i++){
        if (i % 2 != 0){
            count++
        };
    };
    return count
};

var countOdds = function(low,high){
    if (low % 2 == 0 && high % 2 == 0){
        return Math.floor((high - low)/ 2)
    };
    return Math.floor((high - low) / 2)+1
};