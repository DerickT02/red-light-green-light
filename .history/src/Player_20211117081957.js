import './Player.css'


export default function Player(){
    
    
    
    let player = document.querySelector('#Player')
    
    function moveDown(element){
        if(element == null) return
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        player.style.top = (Number(topValue) + 20) + 'px'   
    }

   
   

  document.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowDown'){
        moveDown(player)
      }
    })


 
   

    return(
    <div id= "Player">Player</div>
    )
}

