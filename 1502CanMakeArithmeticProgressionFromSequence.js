/*
A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

Example 1: Input: arr = [3,5,1] Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

Example 2: Input: arr = [1,2,4] Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
*/

let testTrue = [3,5,1,7,9]
let testFalse = [1,2,4]
console.log(arithProg(testTrue))
console.log(arithProg(testFalse))
//RUNTIME: 83MS MEMORY:42.5MB TIME TO SOLVE 25mins
//time: O(n^2) space: O(1)
var canMakeArithmeticProgression = function(arr){
    // if (arr.size() <= 2) return true; // the exercise constraints are that arr.length > 2
    arr = arr.sort((a,b)=> a - b);
    // console.log(arr)
    let valid = false;
    for (let i = 1; i < arr.length-1; i++){
        let back = arr[i] - arr[i-1];
        let front = arr[i+1] - arr[i];
        // console.log(front,back)
        if (front == back){
            valid = true;
        } else {
            return false;
        }
    }
    return true;
}

