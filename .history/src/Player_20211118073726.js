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

   
   

  document.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowDown'){
        moveDown(player)
        console.log
      }
      else if(e.key === 'ArrowUp'){
          moveUp(player)
      }
    })


 
   

    return(
    <div id= "Player">Player</div>
    )
}
