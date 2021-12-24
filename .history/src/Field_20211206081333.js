import './Field.css'
import Player from './Player'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from './GlobalState'




export default function Field(){
    const [light, setLight] = useState(true)
    const [canMove, setCanMove] = useState(true)
    const [lost, setLost] = useState(false)

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
        {(moving && canMove) || (!moving && canMove) || (!moving && !canMove) ?
            <div className = "Field">
                <div className = "Start"><Player /></div>
                <div className = {light ? 'green-light' : 'red-light'}><h1>{moving ? 'player is moving' : 'player stopped moving'}</h1></div>
                <div className = "End"></div> 
            </div>
          : (moving && !canMove) ?  
        <div>
            <h1>
                You Lose
            </h1>
        </div> :  
        
        <div className = "Field">
                <div className = "Start"><Player /></div>
                <div className = {light ? 'green-light' : 'red-light'}><h1>{moving ? 'player is moving' : 'player stopped moving'}</h1></div>
                <div className = "End"></div> 
        </div>
       
        }  
        </div>
        
    )
}