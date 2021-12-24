import './Field.css'
import Player from './Player'
import { useState } from 'react'





export default function Field(){
    const [light, setLight] = useState(true)

    function greenLight(){
        if(light === true){
            setLight(false)
            console.log(light)
        }
        else{
            setLight(true)
            console.log(light)
        }
    }


    window.setTimeout(greenLight, 5000)



    return(
       

        <div>
            
            <div className = "Field">
                <div className = "Start"><Player/></div>
                <div className = {light ? 'green-light' : 'red-light'}><h1>{light ? 'GREEN LIGHT' : 'RED LIGHT'}</h1></div>
                <div className = "End">End</div> 
                
            </div>
        </div>
        
    )
}