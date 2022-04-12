function getMaxSubstrings(s, k) {
    // given a string, check for substrings of at least K length that are the same reversed, return the number of reversable strings.
    // create a reversed copy of S, looping backwards through S check the s[i]=reversed[i], if same increment tracker, else reset tracker, if tracker is > K, increment results
    console.log(s)
    let reversed = s.slice(0).split('').reverse()
    console.log(reversed)
    let results = 0
    let tracker = 0
    for (let i = s.length; i > 0; i--){
        if (reversed[s.length-i]===s[i]){
            tracker++
        } else {
            if (tracker > k){
                results++
            }
            tracker = 0
        }
    }
    return results
}

console.log(getMaxSubstrings("ababaeocco",4))

var countSubstrings = function(S) {
    let len = S.length, ans = 0
    for (let i = 0; i < len; i++) {
        let j = i - 1, k = i
        while (k < len - 1 && S[k] === S[k+1]) k++
        ans += (k - j) * (k - j + 1) / 2, i = k++
        while (~j && k < len && S[k] === S[j]) j--, k++, ans++
    }
    return ans
};

function getMaxSubstrings(s, k) {
    // given a string, check for substrings of at least K length that are the same reversed as they are forward, return the number of reversable strings.
    //find number of reversable strings.
    //iterate through the array and check that each set of substrings of k length is a palindrome. 
    //if palindrome is detected remove from array and continue checking
    s = s.split('')
    let results = 0
    for (let i = 0; i < s.length; i++){
        let sub = s.slice(i,i+k)
        let rev = s.slice(i,i+k).reverse()
        console.log(sub)
        console.log(rev)
        if (sub == rev){
            results++
            s.splice(i,i+k)
        }
    }
    return results
}
