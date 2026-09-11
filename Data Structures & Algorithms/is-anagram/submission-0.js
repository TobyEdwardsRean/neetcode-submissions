class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sCount = new Map()
        if (s.length !== t.length) {
            return false
        }
        else {
            for (let sLetter of s) {
                if (!sCount.has(sLetter)) {
                    sCount.set(sLetter, 1)
                }
                else {
                    let currentSCount = sCount.get(sLetter)
                    sCount.set(sLetter, currentSCount + 1)
                }
            }
            for (let tLetter of t) {
                if (!sCount.has(tLetter)) {
                    return false
                }
                else {
                    let currentTCount = sCount.get(tLetter)
                    sCount.set(tLetter, currentTCount - 1)
                    if (currentTCount <= 0) {
                        return false
                    }
                }
            }
        }
        return true
    }
}
