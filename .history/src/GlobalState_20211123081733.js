import { createContext, useReducer } from "react";
import Appreducer from "./Appreducer";

const initialState = {

    moving: false
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(Appreducer, initialState)

    function setMoving(isMoving){
        dispatch({
            type: 'IS_MOVING',
            payload: isMoving
        })
    }


    return (
        <GlobalContext.Provider value = {{moving: state.moving, setMoving}}>
            {children}
        </GlobalContext.Provider>
    )
}

