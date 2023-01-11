import React from 'react'
import Cell from './Cell'

const Row = ({ row, parentIndex }) => {

    return (
        <div className='row'>
            {row.map((el, index)=>{
                return (
                    <div className='cell' key={index}>
                        <Cell 
                            {...el} 
                            index={index}
                            parentIndex={parentIndex}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Row