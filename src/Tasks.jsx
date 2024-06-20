import React from 'react'
import './App.css'
function Tasks({ todo, description, removee, index, task }) {
   
    
    return (
        <div className='center'>
            <div className='outerdiv'>
                <div className='indiv'>
                    <p>{todo}</p>

                    <p >{description}</p>
                </div>
              
                <button
                style={{
                    padding : 10
                }}
                    onClick={() => {
                        removee(index)
                    }}>-</button>
            </div>
        </div>
    )
}

export default Tasks
