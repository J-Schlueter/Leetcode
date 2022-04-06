var hammingWeight = function(n) {
    let counter = 0
    n = n.toSting(2)
    for (let i = 0; i < n.length; i++){
        if(n[i]==1){
            counter++
        };
    };
    return counter
}

//1st issue: loop wasnt working, turns out binary string was a Number not a String
// solution: use .toString with 2 as radix(base of a number system) parameter

//Time to solve (including whiteboarding) 25 min. 
// O(n) time complexity O(1) space complexity. 
// 3 Attempts avg runtime 90ms memory 43 MB


var hammingWeightRefactor = function(n) {
    return n.toString(2).split("0").join("").length
}

// avg runtime 79ms memory 42.6mb
