import './Field.css'





export default function Field({player}){
    return(
        <div className = "Field">
            <div className = "Start">End</div>
            <div className = "Middle"></div>
            <div className = "End">{player}</div>
        </div>
    )
}