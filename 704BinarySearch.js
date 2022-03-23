// THIS IS SEQUENTIAL SEARCH AND TOTALLY MISSED THE POINT OF THE EXERCISE
// var search = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i
//         } else if (i === nums.length) {
//             return -1
//         }
       
//     }
// };

//HERE IS THE SOLUTION
//  https://leetcode.com/problems/binary-search/discuss/423162/Binary-Search-101
var search = function(nums, target) {
    let lo = 0, hi = nums.length-1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo+1)/2);
        if (target < nums[mid]) {
            hi = mid - 1
        } else {
            lo = mid; 
        }
    }
    return nums[lo]==target?lo:-1;
};
// split down the mid and continue
testArr = [-1,0,3,5,9,12]
testTarget = 9
console.log(search(testArr, testTarget))