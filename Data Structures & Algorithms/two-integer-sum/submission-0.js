class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let ints = new Map()
        for (let [index, num] of nums.entries()) {
            let comp = target - num
            if (ints.has(comp)) {
                let i = ints.get(comp)
                return [i, index]
            }
            else {
                ints.set(num, index)
            }
        }
    }
}
