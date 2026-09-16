class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let brackets = {
            ")": "(",
            "]": "[",
            "}": "{"
        }
        
        for (let char of s) {
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char)
            }
            else if (char === ")" || char === "}" || char === "]") {
                let endChar = stack[stack.length - 1]
                if (endChar === brackets[char]) {
                    stack.pop()
                }
                else {
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
