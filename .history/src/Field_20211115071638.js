import './Field.css'
import Player from './Player'




export default function Field(){
    return(
        <div className = "Field">
            <div className = "End">End</div>
            <div className = "Middle">Middle</div>
            <div className = "Start"><Player/></div>
        </div>
    )
}