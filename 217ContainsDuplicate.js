// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// var containsDuplicate = function(nums) {
//     //sort the array O(n log n)
//    nums.sort((a,b)=>{return b-a});
//    //loop through and compare each number to the previous number, if the same return true O(n)
//    for (i =0; i < nums.length; i++){
//        if (i > 0 && nums[i-1] === nums[i]) return true;
//    };
//    return false;
// };

var containsDuplicateV2 = function(nums) {
    let collection = new Map();

    for (let i = 0; i < nums.length; i++){
        if (collection.has(nums[i])){
            return true;
        } 
        collection.set(nums[i],true);
    }
    return false;
}