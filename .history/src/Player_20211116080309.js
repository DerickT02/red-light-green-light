import './Player.css'


export default function Player(){
    

    
    let player = document.getElementById('Player')
    
    function moveDown(element){
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) + 20) + 'px'   
    }

   moveDown(player)
   

    return(
    <div id= "Player" onKeyPress = {handleMovement}>Player</div>
    )
}

