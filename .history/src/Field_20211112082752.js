import './Field.css'
import Player from './Player'




export default function Field(){
    return(
        <div className = "Field">
            <div className = "End">End</div>
            <div className = "Middle"><Player /></div>
            <div className = "Start"></div>
        </div>
    )
}