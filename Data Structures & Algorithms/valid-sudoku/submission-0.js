class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let col = 0
        let row = 0
        let hor = 0
        let ver = 0
        
        while (row <= 8) {
            let rowSet = new Set()
            col = 0
            while (col <= 8) {
                let rowVal = board[row][col]
                if (rowVal !== ".") {
                    if (rowSet.has(rowVal)) {
                        return false
                    }
                    rowSet.add(rowVal)
                }
                col ++
            }
            row ++
        }

        col = 0
        while (col <= 8) {
            let colSet = new Set()
            row = 0
            while (row <= 8) {
                let colVal = board[row][col]
                if (colVal !== ".") {
                    if (colSet.has(colVal)) {
                        return false
                    }
                    colSet.add(colVal)
                }
                row ++
            }
            col ++
        }

        row = 0
        while (row <= 8) {            
            col = 0
            while (col <= 8) {
                let box = new Set()
                hor = 0
                while (hor <= 2) {
                    ver = 0
                    while (ver <= 2) {
                        let val = board[row + hor][col + ver]
                        if (val !== ".") {
                            if (box.has(val)) {
                                return false
                            }
                            box.add(val)
                        }
                        ver ++
                    }
                    hor ++
                }
                col += 3
            }
            row += 3
        }
        
        return true
    }
}
