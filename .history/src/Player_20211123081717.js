import './Player.css'
import { useEffect, useRef, useContext } from 'react'
import { GlobalContext } from './GlobalState'



export default function Player({canMove, moving}){
    const { setMoving } = useContext(GlobalContext)
    
    
    
    
    function moveDown(element){
        if(element === null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) + 1) + 'px' 
        
       
    }

    function moveUp(element){
        if(element ===null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) - 1) + 'px'
        
    }

   window.addEventListener('keydown', (e) => {
       let currPlayer = document.getElementById('Player')
       
       if(e.code === 'ArrowDown'){
           moveDown(currPlayer)
           setMoving(true)
          
       }

       else if(e.code === 'ArrowUp'){
           moveUp(currPlayer)
           setMoving(true)
       }

       else{
           setMoving(false)
       }
   })



    

 
   

    return(
    <div id= "Player">Player</div>
    )
}

