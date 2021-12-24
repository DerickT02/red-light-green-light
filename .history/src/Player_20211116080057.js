import './Player.css'


export default function Player(){
    

    

    
    function moveDown(element){
        let playerStyle = window.getComputedStyle(element)
        let topValue = playerStyle.getPropertyValue('top').replace('px','')
        element.style.top = (Number(topValue) + 20) + 'px'   
    }

    let player = document.getElementById('Player')
   

    return(
    <div id= "Player" >Player</div>
    )
}

