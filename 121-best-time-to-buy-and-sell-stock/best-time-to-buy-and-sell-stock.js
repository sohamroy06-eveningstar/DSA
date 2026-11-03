/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices){
      let minPrices = prices[0];
    let maxProfit = 0
    for ( let i = 1; i< prices.length;i++){
        if(prices[i] < minPrices){
            minPrices = prices[i]
        }
         let profit = prices[i] - minPrices;
         maxProfit = Math.max(maxProfit, profit);
    }
    return maxProfit;
}