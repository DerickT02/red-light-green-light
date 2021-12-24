import { Provider } from "react-globally";
import Field from "./Field";
import { GlobalProvider } from './GlobalState'
import { createContext, React } from 'react'

function App() {

 

  

  
  return (
    <div className="App">
     <GlobalProvider>
        <Field/>
     </GlobalProvider>
    </div>
  );
}

export default App;
