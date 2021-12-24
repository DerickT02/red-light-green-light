import './Player.css'
import { useEffect, useRef, useContext } from 'react'
import { GlobalContext } from './GlobalState'



export default function Player({canMove}){
    const { setMoving } = useContext(GlobalContext)
    
    let moving = false
    
    
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
       console.log(currPlayer)
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

   function falseMove(){
       moving = false
   }

   window.addEventListener('keyup', (e) => {
       if(e.code === 'ArrowDown'){
           moving = false
           console.log(moving)
       }

       else if(e.code === 'ArrowUp'){
           moving = false
       }
   })



    

 
   

    return(
    <div id= "Player">Player</div>
    )
}

