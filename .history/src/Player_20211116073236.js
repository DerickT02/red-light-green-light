import './Player.css'

export default function Player(){

    function handleMovement(event){
        if(event.keyCode === 38){
            console.log('You are moving up')
        }
        else if(event.keyCode === 40){
            console.log('You are moving down')
        }
        else if(event.keyCode === 37){
            console.log('You are moving left')
        }
        else if(event.keyCode === 39){
            console.log('You are moving right')
        }
    }

    return(
    <div className = "Player" onKeyPress={handleMovement}>Player</div>
    )
}

