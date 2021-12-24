import './Player.css'
import { useState  } from 'react'

export default function Player(){
    const [movement, setMovement] = useState('')

    
    function handleMovement(event){
        if(event.keyCode === 38){
            setMovement('You are moving up')
        }
        else if(event.keyCode === 40){
            setMovement('You are moving down')
        }
        else if(event.keyCode === 37){
            setMovement('You are moving left')
        }
        else if(event.keyCode === 39){
            setMovement('You are moving right')
        }
    }

    return(
    <div className = "Player" onKeyPress={handleMovement}>{movement}</div>
    )
}

