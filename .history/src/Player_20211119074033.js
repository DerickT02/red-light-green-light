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
        window.addEventListener('keydown', handleEvent)
        return () => window.removeEventListener('keydown', handleEvent)
    }, [key])
}



export default function Player(){
    
    
    
    let player = document.querySelector('#Player')
    
    function moveDown(){
        
        let playerStyle = window.getComputedStyle(player)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        player.style.top = (Number(topValue) + 10) + 'px' 
        console.log('Player is moved down')
       
    }

    function moveUp(element){
        
        let playerStyle = window.getComputedStyle(player)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        player.style.top = (Number(topValue) - 10) + 'px'
         
    }

    useKey('ArrowDown', moveDown)



    

 
   

    return(
    <div id= "Player">Player</div>
    )
}

