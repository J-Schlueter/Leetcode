
/*  on whiteboard
step 0) REPHRASE, given a target x,y and an array of points, return the index of the closest point.
step 1) define the answer = valid points, lowest manhattan, lowest index
step 2) pseudocode
-search points for valid coordinates, addind to seperate array
-calculate manhattan point for each valid cord
-if manPoints are tied compare points index
-return lowest points index or -1 if no valid point index exists
    on IDE
step 3) code by each pseudocode step, testing each feature
step 4) adaptation
    started by creating seperate array of manhattanPoints but decided to keep track of lowest point and check at time of calculation
    

    I was passing 98/101 tests on leetcode, so I had to troubleshoot for a while. The issue was that I had set lowestManhattan = points.length, but some of the test cases had really large manhattan points
    so I changed lowestManhattan to start = Infinity
step 5) refactor
    got rid of validPoints array are lowestIndex can be start at -1 and update for at the first valid coordinate
    swap 'for' loop to 'for of' and used indexOf(cord), which i think should actually increase runtime to O(n^2) but it also was in the 99th percentile for runtime on its first run so... shrug?

//time to complete to first pass 30 mins, to last refactor 1:30
// runtime O(n) space O(1)
*/


function nearestValidPoint(x,y,points){
    // let validPoints = [];
    let lowestManhattan = Infinity;
    let lowestIndex = -1;
    for (let i = 0; i < points.length; i++){
        if (points[i][0] === x || points[i][1] === y){
            validPoints.push(points[i])
            let mPoint = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
            if (mPoint < lowestManhattan){
                lowestManhattan = mPoint;
                lowestIndex = i
            }
        }
    }
    //#Slight Refactor#
    // for (let cord of points){
    //     if (cord[0] === x || cord[1] === y){
    //         validPoints.push(cord)
    //         let mPoint = Math.abs(x - cord[0]) + Math.abs(y - cord[1])
    //         if (mPoint < lowestManhattan){
    //             lowestManhattan = mPoint;
    //             lowestIndex = points.indexOf(cord)
    //         }
    //     }
    // }
    // if (validPoints[0] === undefined) {
    //     return -1
    // }
    
    // console.log(validPoints)
    // console.log(lowestManhattan)
    // console.log(lowestIndex)
    return lowestIndex
};


let testX = 71, testY = 13, testPoints = [[32,10],[3,7],[16,65],[57,68],[25,14],[82,70],[80,2],[34,54],[62,77],[46,33],[1,68],[83,77],[56,29],[21,66],[79,81],[15,50],[44,36],[67,79],[61,59],[59,55],[46,21],[66,11],[55,33],[48,54],[41,83],[21,2],[81,27],[24,35],[50,83],[60,27],[45,38],[43,36],[15,34],[33,17],[69,31],[13,48],[71,66],[53,62],[29,12],[22,30],[24,40],[13,11],[22,17],[68,46],[17,37]]
// testPoints = [[3,4]]
// testPoints = [[2,3]]
console.log(nearestValidPoint(testX,testY,testPoints))



function refactor(x, y, points) {
    let bestManhattan = Infinity
    let closestIndex = -1
    points.forEach(([a,b], i)=>{
        if(a===x || b===y){
            const distance = Math.abs(x-a) + Math.abs(y-b)
            if(distance<bestManhattan){
                closestIndex = i
                bestManhattan = distance
            }
        }
    })
    return closestIndex
};


