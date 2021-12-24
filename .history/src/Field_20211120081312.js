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

        setLight(true)
    }


    window.setTimeout(greenLight, Math.floor(Math.random() * 1000))



    return(
       


            <div className = "Field">
                <div className = "Start">{player}</div>
                <div className = "Middle"></div>
                <div className = "End">End</div>

                <div className = 'Light'>{light ? 'Green Light' : 'Red Light'}</div>
            </div>
        
        
    )
}