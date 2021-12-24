import { GlobalProvider } from "./GlobalState";
import Field from "./Field";


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
