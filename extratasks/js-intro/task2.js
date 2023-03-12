function maxBrokerageProfit(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            maxProfit += prices[i + 1] - prices[i];
        }
    }
    return maxProfit;
}

console.log(maxBrokerageProfit([7, 1, 5, 3, 6, 4]));
console.log(maxBrokerageProfit([1, 2, 3, 4, 5]));
console.log(maxBrokerageProfit([7, 6, 4, 3, 1]));
