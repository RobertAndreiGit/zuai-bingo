import React, { useState } from 'react'
import './style.css'

export default function Tile({el}) {
    const [clicked, setClicked] = useState(false);

    return (
        <div className={`tile ${clicked ? 'tile-clicked' : ''}`} onClick={() => setClicked(true)}>
            <p>{el}</p>
        </div>
    )
}
