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
            setCanMove(false)
        }
        else{
            setLight(true)
            setCanMove(true)
        }
    }

    console.log(lost)




    window.setTimeout(greenLight, 5000)
    console.log(canMove)



    return(
       

        <div>
        { 
            
            (moving && canMove) || (!moving && canMove) || (!moving && !canMove) ?
            <div className = "Field">
                <div className = "Start"><Player /></div>
                <div className = {light ? 'green-light' : 'red-light'}><h1>{moving ? 'player is moving' : 'player stopped moving'}</h1></div>
                <div className = "End"></div> 
            </div>
          : (moving && !canMove) ?  
        
        
        <>
        
            <h1>

                You Lose
            </h1>
        </>
        
        :  
        
        <div className = "Field">
                <div className = "Start"><Player /></div>
                <div className = {light ? 'green-light' : 'red-light'}><h1>{moving ? 'player is moving' : 'player stopped moving'}</h1></div>
                <div className = "End"></div> 
        </div>

        
       
        }  
        </div>
        
    )
}