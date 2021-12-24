import './Player.css'


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
    <div onKeyPress = {(e) => {
        if(e.key === 'ArrowDown'){
            moveDown(player)
        }

        else if(e.key === 'ArrowUp'){
            moveUp(player)
        }
    }} id= "Player">Player</div>
    )
}

