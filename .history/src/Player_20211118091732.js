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

    function handleMove(event){
        if(event.key === 'ArrowDown'){
            moveDown(player)
            return
        }
        else if(event.key === 'ArrowUp'){
            moveUp(player)
            return
        }
    }

   
   


 
   

    return(
    <div onKeyPress = {handleMove} id= "Player">Player</div>
    )
}

