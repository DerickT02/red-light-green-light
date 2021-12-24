import { Provider } from "react-globally";
import Field from "./Field";
import { GlobalProvider } from './GlobalState'

function App() {

  const initialState = {
      moving: false
  }

  
  return (
    <div className="App">
    <GlobalProvider>
     <Field/>
     </GlobalProvider>
    </div>
  );
}

export default App;
