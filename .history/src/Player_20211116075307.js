import './Player.css'


export default function Player(){
    

    let player = document.getElementById('Player')
    let playerStyle = window.getComputedStyle(player)
    console.log(playerStyle)
    
  

    return(
    <div id= "Player">Player</div>
    )
}

