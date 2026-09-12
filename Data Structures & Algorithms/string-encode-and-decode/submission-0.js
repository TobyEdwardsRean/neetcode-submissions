class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const encodedStrings = strs.map(str => `${str.length}#${str}`)
        const joinedEncodedStrings = encodedStrings.join("")
        return joinedEncodedStrings
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let pos = 0
        let decodedStrings = []

        while (pos < str.length) {
            let hashIndex = str.indexOf("#", pos)
            let length = parseInt(str.slice(pos, hashIndex))
            let firstString = str.slice(hashIndex + 1, hashIndex + 1 + length)
            decodedStrings.push(firstString)
            pos = hashIndex + 1 + length
        }
        return decodedStrings
    }
}
