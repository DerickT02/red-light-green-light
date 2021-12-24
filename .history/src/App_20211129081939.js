import { Provider } from "react-globally";
import Field from "./Field";
import { GlobalProvider } from './GlobalState'
import { createContext, React } from 'react'

function App() {

 

  const MovingContext = React.createContext(false)

  
  return (
    <div className="App">
     <MovingContext.Provider>
        <Field/>
     </MovingContext.Provider>
    </div>
  );
}

export default App;
