/**
 * @param {Array} field
 * @param {number} row 
 * @param {number} cell
 * @returns {Array} field
 */
const revealNeighbours = (field, row, cell) => {

    let i, j

    for(i=-1; i<=1; i++) {

        for(j=-1; j<=1; j++) {

            if(row+i>=0 && row+i<field.length
            && cell+j>=0 && cell+j<field.length) {

                field[row+i][cell+j].isRevealed = true

                if(field[row+i][cell+j].value===0 && !field[row+i][cell+j].isBomb) {

                    field[row+i][cell+j].value = ' '

                    if(i!=0 || j!=0) {
                        revealNeighbours(field, row+i, cell+j)
                    }
                }
            }
        }
    }

    return field
}

export default revealNeighbours