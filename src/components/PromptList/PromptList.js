import React from 'react'
import './style.css'

export default function PromptList({prompts}) {
    return (
        <div className="prompt-list">
            {prompts.map((el, idx) => 
                <p className="list-element" key={idx}>{idx + 1} - {el}</p>
            )}
        </div>
    )
}
