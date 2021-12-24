import './Player.css'
import { useEffect, useRef, useContext } from 'react'
import { GlobalContext } from './GlobalState'



export default function Player(){
    
    let { moving, setMoving } = useContext(GlobalContext)
    let currMoving = false
    
    
    
    function moveDown(element){
        if(element === null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) + 5) + 'px' 
        moving = true
        return
        
       
    }

    function moveUp(element){
        if(element ===null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) - 5) + 'px'
        moving = true
        return
        
        
    }

    

   window.addEventListener('keydown', (e) => {
       let currPlayer = document.getElementById('Player')
       
       if(e.code === 'ArrowDown' && e.repeat ){
        moveDown(currPlayer)
       
          
       }

       else if(e.code === 'ArrowUp' && e.repeat ){
        moveUp(currPlayer)
        
       }
   })


   window.addEventListener('keyup', (e) => {
       if(e.code === 'ArrowDown'){
           setMoving(false)
           
       }

       else if(e.code === 'ArrowUp'){
           setMoving(false)
       }
   })


  
    

 
   

    return(
    <div id= "Player">Player</div>
    )
}

