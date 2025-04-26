import React, { useState } from 'react'

function Greet() {
    const [message, setmessage] = useState('Click mee')

    const handleClick = () =>{
        setmessage("Button Clicked!")
    }
  return (
    <div>
        <button  onClick ={handleClick}>
            <p>{message}</p>
        </button>
    </div>
  )
}

export default Greet
