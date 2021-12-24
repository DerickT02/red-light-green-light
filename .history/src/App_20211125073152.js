import { Provider } from "react-globally";
import Field from "./Field";


function App() {

  const initialState = {
      moving = false
  }

  
  return (
    <div className="App">
    <Provider globalState = {intialState}>
     <Field/>
    </Provider>
    </div>
  );
}

export default App;
