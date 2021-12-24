import './Field.css'
import { useState } from 'react'





export default function Field({player}){
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
            <div className = {light ? 'green-light' : 'red-light'}>{light ? 'green light' : 'red light'}</div>
            <div className = "Field">
                <div className = "Start">{player}</div>
                <div className = "Middle"></div>
                <div className = "End">End</div> 
                
            </div>
        </div>
        
    )
}