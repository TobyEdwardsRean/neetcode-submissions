class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        this.output = []

        for (let char of tokens) {
            if (char !== "+" && char !== "-" && char !== "*" && char !== "/") {
                this.output.push(Number(char))
            }
            else {
                let second = this.output.pop()
                let first = this.output.pop()
                let product
                switch (char) {
                    case "+":
                        product = first + second
                        break
                    case "-":
                        product = first - second
                        break
                    case "*":
                        product = first * second
                        break
                    case "/":
                        product = Math.trunc(first / second)
                        break
                }
                this.output.push(product)
            }
        }
        return this.output.pop()
    }
}
