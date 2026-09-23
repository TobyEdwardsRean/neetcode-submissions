class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []
        let maxArea = 0

        for (let i = 0; i < heights.length; i ++) {
            while (stack.length !== 0 && heights[i] < heights[stack[stack.length - 1]]) {
                let top = stack.pop()
                let height = heights[top]
                let width
                if (stack.length === 0) {
                    width = i
                }
                else {
                    width = i - stack[stack.length -1] - 1
                }
                let area = width * height
                if (area > maxArea) {
                    maxArea = area
                }
            }
            stack.push(i)
        }
        while (stack.length !== 0) {
            let top = stack.pop()
            let height = heights[top]
            let width
            if (stack.length === 0) {
                width = heights.length
            }
            else {
                width = heights.length - stack[stack.length -1] - 1
            }
            let area = width * height
            if (area > maxArea) {
                maxArea = area
            }
        }
        return maxArea
    }
}
