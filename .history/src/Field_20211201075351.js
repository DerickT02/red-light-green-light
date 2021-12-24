import './Field.css'
import Player from './Player'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from './GlobalState'




export default function Field(){
    const [light, setLight] = useState(true)
    const [canMove, setCanMove] = useState(true)

    const { moving } = useContext(GlobalContext)
   
 
    

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
                <div className = "Start"><Player /></div>
                <div className = {light ? 'green-light' : 'red-light'}><h1>{light ? 'GREEN LIGHT' : 'RED LIGHT'}{moving ? 'player is moving' : 'player stopped moving'}</h1></div>
                <div className = "End"><h1>{moving ? 'player is moving' : 'player stopped moving'}</h1></div> 
                
            </div>  
            
        </div>
        
    )
}