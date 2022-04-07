let test = 19
let test2 = 2

var isHappy = function(n){
    let num = n.toString().split("");
    let sum = 0
    for (let i of num){
        sum += i*i
    }
    return sum
}

console.log(isHappy(test))

console.log(isHappy(test2))