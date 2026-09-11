class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groupedAnagrams = new Map()
        for (let string of strs) {
            let sortedString = string.split('').sort().join('')
            if (groupedAnagrams.has(sortedString)) {
                let match = groupedAnagrams.get(sortedString)
                match.push(string)
            }
            else {
                groupedAnagrams.set(sortedString, [string])
            }
        }
        let anagrams = groupedAnagrams.values()
        return Array.from(anagrams)
    }
}
