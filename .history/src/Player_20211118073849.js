import './Player.css'


export default function Player(){
    
    
    
    let player = document.querySelector('#Player')
    
    function moveDown(element){
        if(element == null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) + 1) + 'px'   
    }

    function moveUp(element){
        if(element == null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) - 1) + 'px'   
    }

   
   

  document.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowDown'){
        moveDown(player)
        console.log(e.key)
      }
      else if(e.key === 'ArrowUp'){
          moveUp(player)
          console.log(e.key)
      }
    })


 
   

    return(
    <div id= "Player">Player</div>
    )
}

