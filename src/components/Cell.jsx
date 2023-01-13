import React, { useContext } from 'react'
import { GameContext } from './Board'

import cleanNeighbours from '../utils/cleanNeighbours'
import { getValues } from '../utils/getField'
import revealNeighbours from '../utils/revealNeighbours'

import flag from '../assets/flag.png'
import bomb from '../assets/bomb.jpg'

const Cell = ({ isFlagged, isRevealed, isBomb, value, parentIndex, index }) => {

    const gameContext = useContext(GameContext)

    const handleClick = () => {

        gameContext.moves.current++

        if(gameContext.moves.current===1) {
            
            gameContext.setField((field) => {

                field = cleanNeighbours(field, parentIndex, index)
                field = getValues(field)
                field[parentIndex][index].isRevealed=true

                return[...field]
            })
        } 
        else {
    
            gameContext.setField((field) => {

                field[parentIndex][index].isRevealed=true

                return[...field]
            })
        }
    }

    const handleRightClick = (ev) => {

        ev.preventDefault()

        let bool = gameContext.field[parentIndex][index].isFlagged
        bool = !bool
    
        gameContext.setField((field) => {

            field[parentIndex][index].isFlagged=bool

            return([...field])
        })
    }

    if(isFlagged) {
        return (
            <button 
                onContextMenu={handleRightClick}
                className='cellBtn'
            >
                <img 
                    src={flag} 
                    alt="flag" 
                    className='cellDiv'
                />
            </button>
        )
    }

    if(!isRevealed) {
        return (
            <button 
                onClick={handleClick}
                onContextMenu={handleRightClick}
                className='cellBtn'
            />
        )
    }

    if(isBomb) {

        const disableClick = (ev) => {
            ev.stopPropagation()
            ev.preventDefault()
        }
        document.addEventListener("click", disableClick, true)

        const gameOver = () => {
            alert('GAME OVER!')
            location.reload()
        }
        setTimeout(gameOver, 1500)

        return (
            <img className='cellDiv'
                src={bomb}
                alt='boom!'
            />
        )
    }

    if(value===0) {

        gameContext.setField((field) => {
            
            field = revealNeighbours(field, parentIndex, index)

            return[...field]
        })
    }

    return (
        <div className='cellDiv dflex-cen'>
            <div>
                {value}
            </div>
        </div>
    )
}

export default Cell