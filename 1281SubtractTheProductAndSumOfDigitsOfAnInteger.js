/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
*/


//REPHRASE
//given a number, seperate the digits and return the result of some arithmetic using those digits.
//PSEUDOCODE
//convert number to string, split the string, map the string
//create product var and sum var, loop through map doing respective arithmetic to var's
//return poduct var - sum var

var subtractProductAndSum = function(n) {
    n = n.toString().split("").map(Number);
    let product = 1
    let sum = 0
    
    for (let num of n){
        product = product * num
        sum += num
    }
    return product-sum
};

//Time to solve including whiteboarding 12 mins
// runtime 60ms memory 42.4

//REFACTOR
var subtractProductAndSum = function(n) {
    const num = n.toString().split('');
    let sum = 0;
    let product = 1;
    
    for (let i of num) {
        sum += (+i);
        product *= (+i);
    }
    
    
    return product - sum;
};