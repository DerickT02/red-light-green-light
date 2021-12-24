import './Player.css'
import { useEffect, useRef, useContext } from 'react'
import { GlobalContext } from './GlobalState'



export default function Player({canMove}){
    const { setMoving, moving } = useContext(GlobalContext)
    
    
    
    
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
       console.log(currPlayer)
       if(e.code === 'ArrowDown'){
           moveDown(currPlayer)
           
          
       }

       else if(e.code === 'ArrowUp'){
           moveUp(currPlayer)
         
       }

       else{
           setMoving(false)
       }
   })



    

 
   

    return(
    <div id= "Player">Player</div>
    )
}

