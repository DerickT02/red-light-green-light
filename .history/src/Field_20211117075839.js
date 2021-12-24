import './Field.css'





export default function Field({player}){
    let keyBoard = document.querySelector('.Field');
keyBoard.addEventListener('keypress', e => {
  console.log(e)
})  
    return(
        <div className = "Field">
            <div className = "Start">{player}</div>
            <div className = "Middle"></div>
            <div className = "End">End</div>
        </div>
    )
}