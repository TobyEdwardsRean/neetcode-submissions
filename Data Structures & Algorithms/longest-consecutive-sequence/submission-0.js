class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let newNums = new Set()
        let longest = 0

        for (let num of nums) {
            newNums.add(num)
        }
        for (let num of newNums) {
            if (!newNums.has(num - 1)) {
                let current = num
                let count = 0
                while (newNums.has(current)) {
                    count ++
                    current ++
                }
                if (count > longest) {
                    longest = count
                }
            }
        }
        return longest
    }
}
