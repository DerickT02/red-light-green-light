import './Field.css'
import Player from './Player'




export default function Field(){
    return(
        <div className = "Field">
            <Player />
            <div className = "End">End</div>
            <div className = "Middle"></div>
            <div className = "Start"></div>
        </div>
    )
}