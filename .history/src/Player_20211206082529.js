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
       
      
        
       
    }

    function moveUp(element){
        if(element ===null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) - 5) + 'px'
      
    
        
        
    }

    

   window.addEventListener('keydown', (e) => {
       let currPlayer = document.getElementById('Player')

    if(e.repeat){
        setMoving(true)
        
    }


       
       else if(e.code === 'ArrowDown'){
        moveDown(currPlayer)
       
          
       }

       else if(e.code === 'ArrowUp'){
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

       else{
           setMoving(false)
       }
   })


  
    

 
   

    return(
    <div id= "Player">Player</div>
    )
}

