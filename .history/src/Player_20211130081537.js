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
        setMoving(currMoving)
        return
        
       
    }

    function moveUp(element){
        if(element ===null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) - 5) + 'px'
        setMoving(currMoving)
        return
        
        
    }

    

   window.addEventListener('keydown', (e) => {
       let currPlayer = document.getElementById('Player')
       
       if(e.code === 'ArrowDown' && e.repeat && !currMoving){
        moveDown(currPlayer)
       currMoving = true
          
       }

       else if(e.code === 'ArrowUp' && e.repeat){
        moveUp(currPlayer)
        currMoving = true
       }

       else{
           moving = false
       }
   })


   window.addEventListener('keyup', (e) => {
       if(e.code === 'ArrowDown'){
           
           currMoving = false
       }

       else if(e.code === 'ArrowUp'){
            currMoving = false
       }
   })


  
    

 
   

    return(
    <div id= "Player">Player</div>
    )
}

