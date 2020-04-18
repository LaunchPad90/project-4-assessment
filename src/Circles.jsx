import React from 'react'

export default function Circles(props) {
    return (
        <div>
            <div className="Circles">
                <div className={props.className === 1 ? 'selected' : ''}>1</div>
                <div className={props.className === 2 ? 'selected' : ''}>2</div>
                <div className={props.className === 3 ? 'selected' : ''}>3</div>
                <div className={props.className === 4 ? 'selected' : ''}>4</div>
            </div>
        </div>
    )
}
