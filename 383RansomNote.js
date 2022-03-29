/*Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

// Discussed javascript solution. time 88ms, 44.7 MB memory. 
var canConstruct = function(ransomNote, magazine) {

    const map = {};
    for(let letter of magazine) {
        if (!map[letter]) {
            map[letter] = 0;
        }
        map[letter]++;
    }
    
    for(let letter of ransomNote) {
        if(!map[letter]) {
            return false;
        } 
        map[letter]--;
    }
    return true;
};

// original solution. time 128ms, 45.4 MB memory. 40 mins+ to create.
var makeNote = function(ransomNote, magazine) {

    //map our magazine letter:count pairings
    let magObj = new Object
    for (letter of magazine){
            // arr[1] = a, letter = a
            // arr[2] = a, letter = a, arrObj[a] = 1
            if (magObj[letter] !== undefined ){
                magObj[letter]++
            } else {
                magObj[letter] = 1
            };
    };
    //map target letter:count pairings
    let tarObj = new Object
    for (letter of ransomNote){
            // arr[1] = a, letter = a
            // arr[2] = a, letter = a, arrObj[a] = 1
            if (tarObj[letter] !== undefined ){
                tarObj[letter]++
            } else {
                tarObj[letter] = 1
            };
    };

    //compare the two pairings
    for (letter in tarObj) {
        if (tarObj[letter] > magObj[letter]){
            return false
        } else if (magObj[letter] == undefined) {
            return false
        } else {
            console.log(`sufficient ${letter}'s`)
        };
        
    };
    return true
};

console.log(canConstruct("a","b"));
console.log(canConstruct("fihjjjjei","hjibagacbhadfaefdjaeaebgi"));

