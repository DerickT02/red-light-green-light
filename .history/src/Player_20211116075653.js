import './Player.css'


export default function Player(){
    

    let player = document.getElementById('Player')
    let playerStyle = window.getComputedStyle(player)
    console.log(playerStyle)
    let topValue = playerStyle.getPropertyValue('top').replace('px','')
    player.style.top = (Number(topValue) + 20) + 'px'
    
  

    return(
    <div id= "Player">Player</div>
    )
}

