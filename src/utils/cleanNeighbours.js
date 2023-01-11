/**
 * @param {Array} field
 * @param {number} row
 * @param {number} cell
 * @returns {Array} field
 */
const cleanNeighbours = (field, row, cell) => {

    let i, j

    for(i=-1; i<=1; i++) {

        for(j=-1; j<=1; j++) {

            if(row+i>=0 && row+i<field.length
            && cell+j>=0 && cell+j<field.length) {
                field[row+i][cell+j].isBomb = false
            }
        }
    }

    return field
}

export default cleanNeighbours