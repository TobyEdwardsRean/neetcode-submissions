class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortedNums = nums.sort((a, b) => a - b)
        let triplets = []

        for (let i = 0; i < sortedNums.length; i ++) {
            let j = i + 1
            let k = sortedNums.length - 1
            if (sortedNums[i] !== sortedNums[i - 1]) {
                while (j < k) {
                    if (sortedNums[i] + sortedNums[j] + sortedNums[k] == 0) {
                        triplets.push([sortedNums[i], sortedNums[j], sortedNums[k]])
                        j ++
                        k --
                        while (j < k && sortedNums[j] == sortedNums[j - 1]) {
                            j ++
                        }
                        while (j < k && sortedNums[k] == sortedNums[k + 1]) {
                            k --
                        }
                    }
                    else if (sortedNums[i] + sortedNums[j] + sortedNums[k] < 0) {
                        j ++
                    }
                    else {
                        k --
                    }
                }
            }
        }
        return triplets
    }
}
