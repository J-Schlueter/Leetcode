// Background info: Area of a triangle via its sides is found with Heron's formula p=(a+b+c)/2 area=sqrt(p(p-a)(p-b)(p-c))
//REPHRASE given an array find the 3 largest nums and run those through Heron's returning the area or 0 whichever is greater.
//Pseudocode
// sort numbs by ascending, slice last 3 indices, 
// var largestPerimeter = function(nums) {
//     nums = nums.sort((a,b)=>(a-b))
//     let largestNums = nums.slice(nums.length-3)
//     let [sA,sB,sC] = [largestNums[0],largestNums[1],largestNums[2]]
//     let p = (sA+sB+sC)/2
//     console.log(p)
//     let area = Math.sqrt(p*(p-sA)*(p-sA)*(p-sC))
//     console.log(area)
//     return (area > 0) ? area : 0
// };


// accidentally spent 30 mins making an algo to find the area 🙃

/*
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. 
If it is impossible to form any triangle of a non-zero area, return 0.

 
Example 1:
Input: nums = [2,1,2]
Output: 5

Example 2:
Input: nums = [1,2,1]
Output: 0
*/


// REPHRASE
// find the three largest numbers in an array and make sure that the largest side is less than the sum of the 2 shorter sides.

var largestPerimeter = function(nums) {
    //descending sort
	nums.sort((a, b)=> b - a);    
	for(let i = 0; i < nums.length-2; i++){
        //find the sum of the 2 shorter sides
		let sum = nums[i+1] + nums[i+2];
        // if the sum of the short sides is greater than this number return the total sum of sides as this uses that largest numbers that form a valid triangle
		if (sum > nums[i]) return sum + nums[i];
	 }
	return 0;  
}
// RUNTIME:88ms O(N log N) SPACE:45.5MB O(1) 
console.log(largestPerimeter([2,1,2]))
console.log(largestPerimeter([1,2,1]))
console.log(largestPerimeter([3,6,2,3]))