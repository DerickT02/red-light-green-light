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

       else if(e.code === 'ArrowUp'){
           moveUp(currPlayer)
         
       }

       else{
           moving = false
       }
   })


   window.addEventListener('keyup', (e) => {
       if(e.code === 'ArrowDown'){
           moving = false
           
       }

       else if(e.code === 'ArrowUp'){
           moving = false
       }
   })



    

 
   

    return(
    <div id= "Player">Player</div>
    )
}

