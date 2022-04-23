/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Rephrase: is a string the same when read backwards and forwards
pseudocode: remove all non-alphanumerics and case sensitivity in string, create copy of string and reverse, iteratively compare all indexes should be equal, return boolean

start 7:35 finish 7:49

*/

var isPalindrome = function(s) {
    const alphanum = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    console.log(alphanum);
    const reversed = alphanum.split("").reverse().join("");
    console.log(alphanum);
    console.log(reversed);
    for (let i = 0; i < reversed.length; i++){
        if (reversed[i] !== alphanum[i]){
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

var topJava = function(s) {
    
}