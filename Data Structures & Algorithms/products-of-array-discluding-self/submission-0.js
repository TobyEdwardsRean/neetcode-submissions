class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pos = 0
        let output = []
        let leftProduct = 1
        let rightProduct = 1
        while (pos < nums.length) {
            output.push(leftProduct)
            leftProduct *= nums[pos]
            pos ++
        }

        pos = nums.length - 1
        while (pos >= 0) {
            output[pos] *= rightProduct
            rightProduct *= nums[pos]
            pos --
        }

        return output
    }
}
