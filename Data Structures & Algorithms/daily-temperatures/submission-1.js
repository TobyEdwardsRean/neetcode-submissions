class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // this.result = []

        // for (let current = 0; current < temperatures.length; current ++) {
        //     let count = 0
        //     let foundWarmer = false
        //     for (let next = current + 1; next < temperatures.length; next ++) {
        //         count ++
        //         if (temperatures[next] > temperatures[current]) {
        //             this.result.push(count)
        //             foundWarmer = true
        //             break
        //         }
        //         else {
        //             continue
        //         }
        //     }
        //     if (foundWarmer === false) {
        //         this.result.push(0)
        //     }
        // }
        // return this.result
        
        let result = new Array(temperatures.length).fill(0)
        let stack = []
        
        for (let current = 0; current < temperatures.length; current ++) {
            while (stack.length !== 0 && temperatures[current] > temperatures[stack[stack.length - 1]]) {
                let top = stack[stack.length - 1]
                result[top] = current - top
                stack.pop()
            }
            stack.push(current)
        }
        return result
    }
}
