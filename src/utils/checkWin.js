/**
 * @param {Array} field
 * @returns {Boolean} numOfBombs
 */
const checkWin = (field) => {

    let i, j, isWin=true

    mainloop: for(i=0; i<field.length; i++) {

        for(j=0; j<field.length; j++) {

            if(!field[i][j].isRevealed){

                if(!field[i][j].isBomb) {

                    isWin=false
                    break mainloop
                }
            }
        }
    }

    return isWin
}

export default checkWin