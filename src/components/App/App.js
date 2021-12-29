import React from "react";
import { useState, createContext } from "react";
import { globalState } from "../../globalState";
import Header from '../Header/Header';
import Page from "../Page/Page";

export const AppContext = createContext(null)

function App() {
    const [state, setState] = useState(globalState);
    return(
        <div className="container-fluid">
            <AppContext.Provider value={{state, setState}}>
                <Header />
                <Page />
            </AppContext.Provider>
        </div>
    )
}

export default App;