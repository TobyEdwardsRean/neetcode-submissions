class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map()
        for (let int of nums) {
            if (!count.has(int)) {
                count.set(int, 1)
            }
            else {
                let currentCount = count.get(int)
                count.set(int, currentCount + 1)
            }
        }
        let countArray = [...count.entries()]
        let sortedCountArray = countArray.sort((a, b) => b[1] - a[1])
        let finalArray = sortedCountArray.slice(0, k)
        return finalArray.map(pair => pair[0])
    }
}
