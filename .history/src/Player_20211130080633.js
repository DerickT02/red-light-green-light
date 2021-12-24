import './Player.css'
import { useEffect, useRef, useContext } from 'react'
import { GlobalContext } from './GlobalState'



export default function Player(){
    
    let { moving, setMoving } = useContext(GlobalContext)
    
    
    
    function moveDown(element){
        if(element === null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) + 1) + 'px' 
        return
        
       
    }

    function moveUp(element){
        if(element ===null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) - 1) + 'px'
        return
        
        
    }

   window.addEventListener('keydown', (e) => {
       let currPlayer = document.getElementById('Player')
       
       if(e.code === 'ArrowDown' && e.repeat){
        currPlayer.style.top = (Number(currPlayer.style.top) + 1) + 'px'
          
          
       }

       else if(e.code === 'ArrowUp' && e.repeat){
          
        currPlayer.style.top = (NUmber(currPlayer.style.top) - 1) + 'px'
       }

       else{
           moving = false
       }
   })


   window.addEventListener('keyup', (e) => {
       if(e.code === 'ArrowDown'){
           setMoving(false)
           console.log(moving)
       }

       else if(e.code === 'ArrowUp'){
           setMoving(false)
       }
   })



    

 
   

    return(
    <div id= "Player">Player</div>
    )
}

