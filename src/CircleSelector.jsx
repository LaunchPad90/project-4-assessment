import React from 'react'


export default function CircleSelector(props) {
    return (
        <div>
           <div className="CircleSelector">
               <button onClick={() => props.handleClick(1)}className={props.className === 1 ? 'selected' : ''}>Select Circle 1</button>
               <button onClick={() => props.handleClick(2)}className={props.className === 2 ? 'selected' : ''}>Select Circle 2</button>
               <button onClick={() => props.handleClick(3)}className={props.className === 3 ? 'selected' : ''}>Select Circle 3</button>
               <button onClick={() => props.handleClick(4)}className={props.className === 4 ? 'selected' : ''}>Select Circle 4</button>
           </div>
        </div>
    )
}
