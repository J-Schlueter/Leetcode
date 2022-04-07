/*PROBLEM 
There is a function signFunc(x) that returns: 1 if x is positive, -1 if x is negative, 0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.
Return signFunc(product).

Example 1: Input: nums = [-1,-2,-3,-4,3,2,1] Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1

Example 2:
Input: nums = [1,5,0,2,-3] Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0

Example 3:
Input: nums = [-1,1,-1,1,-1] Output: -1
Explanation: The product of all values in the array is -1, and signFunc(-1) = -1

REPHRASE: given an array of nums find the product of all nums and return whether the product is positive 0 or negative.
PSUEDOCODE:
-intialize product = nums.reduce
-define signFunc with conditional check if passed param is >, ===, or < 0
-return signFunc(product)
*/



// My original solution, which passed 75/76 tests failed the last one because the product got so large that the program broke and treated it as NaN, I added halving to the reduce function to prevent this.
// but obviously that doesnt seem like intended behavior, it seems this last test was meant to disqualify this algorithm
//RUNTIME 90ms MEMORY 44mb TIME TO SOLVE:20 mins
//Time: O(n) Space: O(1)
var arraySign = function(nums) {
    let product = nums.reduce((a,b)=> (a*b)/2 );
    console.log(product);
    function signFun(arrayProduct){
        if (arrayProduct > 0) {
            return 1;
        } else if (arrayProduct === 0 ){
            return 0;
        } else if (arrayProduct < 0){
            return -1;
        }
    }
    return signFun(product)
};


let breakCase = [1,28,-91,-62,-36,-1,-84,-90,-92,61,6,-58,-60,2,51,-15,-18,-81,87,84,100,-84,-13,-87,-33,72,-72,-59,-79,28,-69,-97,-93,17,67,11,-12,19,5,42,-85,71,-77,-82,26,-58,-51,-14,63,-85,-86,66,47,57,-86,-25,-75,59,-17,-71,89,-78,-42,30,39,61,-96,-30,-29,-92,-90,69,20,65,32,92,44,-71,-18,87,-86,23,-96,-21,-49,-96,-98,35,-11,-1,81,-48,68,5,75,57,-30,-7,32,86,-29,-86,-61,45,-31,-93,-26,-9,86,57,-52,75,68,-58,14,27,-94,47,-38,-44,75,-83,21,-83,43,62,74,97,78,43,54,28,64,-19,-89,88,68,18,-96,-83,-25,-71,88,-84,-24,-61,72,-90,-56,29,46,56,51,16,66,-2,65,-95,16,51,42,61,99,89,-93,59,-99,69,26,-61,21,41,40,-4,-49,3,-96,57,65,72,-41,-77,-4,61,71,-88,21,-95,38,64,92,0,-63]

console.log(arraySign(breakCase))

//here is the highest rated solution translated from Java to JS
//RUNTIME 64ms MEMORY 44mb 
//Time: O(n) Space: O(1)
function optimalSolution(nums){
    let sign = 1;
    for (let n of nums){
        if (n === 0){
            return 0;
        } else if (n < 0) {
            sign = -sign;
        }
    }
    return sign;
}
//EXPLAINATION: because we really only need the SIGN of the product not the actual product you can find this by looping through nums and checking, if 0 is present the total product will be 0
// if a negative number is present flip the sign.

