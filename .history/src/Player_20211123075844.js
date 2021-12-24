import './Player.css'
import { useEffect, useRef } from 'react'




export default function Player({canMove, moving}){
    
    
    
    
    
    function moveDown(element){
        if(element === null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) + 1) + 'px' 
        moving = true
       
    }

    function moveUp(element){
        if(element ===null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) - 1) + 'px'
        moving = true
    }

   window.addEventListener('keydown', (e) => {
       let currPlayer = document.getElementById('Player')
       
       if(e.code === 'ArrowDown'){
           moveDown(currPlayer)
           
          
       }

       if(e.code === 'ArrowUp'){
           moveUp(currPlayer)
       }
   })



    

 
   

    return(
    <div id= "Player">Player</div>
    )
}

