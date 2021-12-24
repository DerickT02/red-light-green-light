import './Player.css'


export default function Player(){
    
    
    
    let player = document.querySelector('.Player')
    
    function moveDown(element){
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) + 20) + 'px'   
    }

   
   

  document.addEventListener('keydown', e => {
      if(e.key == 'ArrowDown'){
        moveDown(player)
      }
    })


 
   

    return(
    <div id= "Player">Player</div>
    )
}

