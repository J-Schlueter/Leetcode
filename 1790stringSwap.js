// var areAlmostEqual = function(s1, s2) {
//     if (s1 === s2) return true;
//     let dif = 0;
//     let notes = new Set();
//     for (let i = 0; i < s1.length; i++){
//         if (s1[i] !== s2[i]){
//             dif++
//             notes.add(s1[i],s2[i])
//         }
//     }
//    if(dif<2 && notes.size < 2){
//         return true
//     }
//     return false
// };

var FAILEDareAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;
    let dif = 0;
    let letters = new Set();
    for (let i = 0; i < s1.length; i++){
        letters.add(s1[i])
        letters.add(s2[i])
        if (s1[i] !== s2[i]){
            dif++
        }
    }
    if (letters.size % 2 !== 0){
        console.log(letters.size)
        return false
    }
    if (dif > 2){
        return false
    }
    return true
};

var areAlmostEqual = function(s1, s2) {
    if(s1==s2) return true;
     s2=s2.split('');
     for(let i=0;i<s1.length;i++){
         if(s1[i]==s2[i]) continue;
         let j;
         for(j=i+1;j<s2.length;j++){
             if(s1[j]==s2[j]) continue;
             if(s2[j]==s1[i]){
                 [s2[i],s2[j]]=[s2[j],s2[i]];
                 return s1==s2.join('');
             }
         }
         if(j==s2.length) return false;
     }
     return true;
 };
console.log(areAlmostEqual("bank","kanb"))
console.log(areAlmostEqual("aa","ac"))
console.log(areAlmostEqual("caa","aac"))
console.log(areAlmostEqual("akrjnhuojtkhlqdfifwxbsmphhcchuqcconcvplcyxjpi","akrjnhuojtkhlxdfifwqbsmphhcchuqcconcvplcyxjpi"))

