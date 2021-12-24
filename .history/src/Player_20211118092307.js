import './Player.css'
import { useEffec}

export default function Player(){
    
    
    
    let player = document.querySelector('#Player')
    
    function moveDown(element){
        if(element == null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) + 10) + 'px' 
       
    }

    function moveUp(element){
        if(element == null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) - 10) + 'px'
         
    }

    function handleMove(event){
        if(event.key === 'ArrowDown'){
            moveDown(player)
            console.log(event.key)
            return
        }
        else if(event.key === 'ArrowUp'){
            moveUp(player)
            console.log(event.key)
            return
        }
    }

    document.documentElement.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowDown' || e.key === 'SPACE'){
          moveDown(player)
          
          console.log(e.key)
        }
        else if(e.key === 'ArrowUp'){
            moveUp(player)
           
            console.log(e.key)
        }
      })

   
   


 
   

    return(
    <div onKeyDown = {handleMove} id= "Player">Player</div>
    )
}

