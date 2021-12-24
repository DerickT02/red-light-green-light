import './Player.css'
import { useEffect, useRef } from 'react'

function useKey(key, cb){
    const callbackRef = useRef(cb)

    useEffect(() => {
        callbackRef.current = cb
    }, [])

    useEffect(() => {
        function handleEvent(event){
            if(event.code == key){
                callbackRef.current(event)
            }
        }
        document.addEventListener('keypress', handleEvent)
        return () => document.removeEventListener('keypress', handleEvent)
    })
}



export default function Player(){
    
    
    
    let player = document.querySelector('#Player')
    
    function moveDown(element){
        if(element == null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) + 10) + 'px' 
        console.log('Player is moved down')
       
    }

    function moveUp(element){
        if(element == null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) - 10) + 'px'
         
    }

  
    

 window.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowDown' || e.key === 'SPACE'){
          moveDown(player)
          
          console.log(e.key)
        }
        else if(e.key === 'ArrowUp'){
            moveUp(player)
           
            console.log(e.key)
        }
      })

   
      useKey('ArrowDown', moveDown(player))

 
   

    return(
    <div id= "Player">Player</div>
    )
}

