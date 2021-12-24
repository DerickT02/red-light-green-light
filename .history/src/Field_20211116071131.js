import './Field.css'





export default function Field({player}){
    return(
        <div className = "Field">
            <div className = "End">End</div>
            <div className = "Middle"></div>
            <div className = "Start">{player}</div>
        </div>
    )
}