import Player from './Player'
import Field from "./Field";


function App() {
let keyBoard = document.querySelector('.App');
keyBoard.addEventListener('keydown', e => {
  console.log(e)
})

  return (
    <div className="App">
     <Field player = {<Player />}/>
    
    </div>
  );
}

export default App;
