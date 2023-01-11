import React, { createContext, useEffect, useRef, useState } from 'react'
import Row from './Row'

import getField from '../utils/getField'
import checkWin from '../utils/checkWin'

const GameContext = createContext()

const Board = () => {

    const[field, setField] = useState([])
    const[difficult, setDifficult] = useState(20)
    const[isLoading, setIsLoading] = useState(true)
    const[isWinner, setIsWinner] = useState(false)

    const moves = useRef(0)

    const handleDifficult = () => {
        setIsLoading(true)
        moves.current = 0
        setField(getField(difficult))
        setIsLoading(false)
    }
    useEffect(handleDifficult, [difficult])

    const checkIsWinner = () => {

        if(moves.current>=1) {
            if(checkWin(field)) setIsWinner(true) 
        }
    }
    useEffect(checkIsWinner, [field])

    // useEffect(()=>{console.log(field)}, [field])

    if(isLoading) return(<h1>Is loading...</h1>)
    
    if(isWinner) {

        const disableClick = (ev) => {
            ev.stopPropagation()
            ev.preventDefault()
        }
        document.addEventListener("click", disableClick, true)

        const victory = () => {
            alert('VICTORY!')
            location.reload()
        }
        setTimeout(victory, 1500)
    }

    return(
        <div className='board'>
            <GameContext.Provider value={{ setField: setField, field: field, moves: moves }}>
                {field.map((el, index)=>{

                    return(
                        <Row row={el} parentIndex={index} key={index} />
                    )
                })}
            </GameContext.Provider>
        </div>
    )
}

export default Board
export { GameContext }