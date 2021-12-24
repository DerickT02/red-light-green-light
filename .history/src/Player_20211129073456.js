import './Player.css'
import { useEffect, useRef, useContext } from 'react'
import { GlobalContext } from './GlobalState'



export default function Player(){
    
    let { moving } = useContext(GlobalContext)
    
    
    
    function moveDown(element){
        if(element === null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) + 1) + 'px' 
        setMoving(true)
        
       
    }

    function moveUp(element){
        if(element ===null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) - 1) + 'px'
        setMoving(true)
        
        
    }

   window.addEventListener('keydown', (e) => {
       let currPlayer = document.getElementById('Player')
       
       if(e.code === 'ArrowDown'){
           moveDown(currPlayer)
          console.log(moving)
          
       }

       else if(e.code === 'ArrowUp'){
           moveUp(currPlayer)
         
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

