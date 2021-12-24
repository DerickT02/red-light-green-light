import './Player.css'
import { useEffect, useRef } from 'react'




export default function Player(){
    
    
    
    let player = document.getElementById('Player')
    console.log(player)
    
    function moveDown(element){
        if(element === null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        player.style.top = (Number(topValue) + 10) + 'px' 
        console.log('Player is moved down')
       
    }

    function moveUp(element){
        if(element ===null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        player.style.top = (Number(topValue) - 10) + 'px'
         
    }

   window.addEventListener('keydown', (e) => {
       let currPlayer = player
       console.log(currPlayer)
       if(e.code === 'ArrowDown'){
           moveDown(currPlayer)
           console.log(currPlayer)
           console.log(e.code)
          
       }
   })



    

 
   

    return(
    <div id= "Player">Player</div>
    )
}

