class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0
        let minPrice = prices[0]

        for (let price of prices) {
            if (price < minPrice) {
                minPrice = price
            }
            let profit = price - minPrice
            if (profit > max) {
                max = profit
            }
        }
        return max
    }
}
