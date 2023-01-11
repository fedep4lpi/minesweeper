/**
 * @param {number} difficult
 * @returns {Array} field
 */
const createField = (difficult) => {

    let i, j
    let field=[]

    for(i=0; i<difficult; i++){

        field[i]=[]

        for(j=0; j<difficult; j++){

            field[i][j]={}
            field[i][j].value=null
            field[i][j].isBomb=false
            field[i][j].isFlagged=false
            field[i][j].isRevealed=false
        }
    }

    return field
}

/**
 * @param {Array} field 
 * @returns {Array} field
 */
const createBombs = (field) => {

    let i, j, bombs, maxBombs, rand

    bombs = 0
    maxBombs = Math.floor(Math.pow(field.length, 2)/8)

    mainLoop: while(true) {

        for(i=0; i<field.length; i++){

            for(j=0; j<field.length; j++){

                rand = Math.floor(Math.random() * 8)
                if(!rand){
                    field[i][j].isBomb=true
                    bombs++
                }

                if(bombs>=maxBombs) break mainLoop
            }
            
        }

    }

    return field
}

/**
 * @param {Array} field
 * @returns {Array} field
 */
const getValues = (field) => {

    let i, j, x, y, tmp

    for(i=0; i<field.length; i++){

        for(j=0; j<field.length; j++){

            tmp=0

            for(x=-1; x<=1; x++){
                for(y=-1; y<=1; y++){

                    if(i+x>=0 && i+x<field.length 
                    && j+y>=0 && j+y<field.length){
                        if(field[i+x][j+y].isBomb) tmp++
                        if(field[i+x][j+y].isBomb && x===0 && y===0) tmp--
                    }
                }
            }

            field[i][j].value = tmp
        }
        
    }

    return field
}

/**
 * @param {number} difficult
 * @returns {Array} field
 */
const getField = (difficult) => {

    let field

    field = createField(difficult)
    field = createBombs(field)

    return field
}

export default getField
export { getValues }