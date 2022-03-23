let priceTest = [7,1,5,3,6,4];

function maxProfit(prices) {

    /* FIRST ATTEMPT
    let hi = prices[0]
    let lo = prices[0]
    for (let index = 0; index < prices.length; index++) {
        if (prices[index] < lo) {
            hi = prices[index]
            lo = prices[index]
        } else if (prices[index] > hi) {
            hi = prices[index]
        };
    }
    console.log(hi,lo);
    return hi-lo ;
    */

    // O(1)--O(n) solutions
    if (prices.length === 0) {
        return 0 ;
    };

    let min = prices[0]
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        
        if (min > prices[i]) { //min starts off as the first value of the array, if smaller value is encountered assign to 
            min = prices[i]
        } else if (prices[i] - min > profit) {
            profit = prices[i] - min
        }
    }
     return profit
};

console.log(maxProfit(priceTest))