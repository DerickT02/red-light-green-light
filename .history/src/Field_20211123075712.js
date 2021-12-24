import './Field.css'
import Player from './Player'
import { useState } from 'react'





export default function Field(){
    const [light, setLight] = useState(true)
    const [canMove, setCanMove] = useState(true)
    const [moving, setMoving] = useState(false)
    console.log(moving)

    function greenLight(){
        if(light === true){
            setLight(false)
            setCanMove(true)
        }
        else{
            setLight(true)
            setCanMove(false)
        }
    }


    window.setTimeout(greenLight, 5000)



    return(
       

        <div>
            
            <div className = "Field">
                <div className = "Start"><Player canMove = {canMove} moving = {moving}/></div>
                <div className = {light ? 'green-light' : 'red-light'}><h1>{light ? 'GREEN LIGHT' : 'RED LIGHT'}</h1></div>
                <div className = "End">End</div> 
                
            </div>
        </div>
        
    )
}