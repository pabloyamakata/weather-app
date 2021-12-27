import React from "react";
import { useState, createContext } from "react";
import { globalState } from "../globalState";
import Header from './Header/Header';
import Page from "./Page/Page";

export const AppContext = createContext(null)

function App() {
    const [state, setState] = useState(globalState);
    return(
        <AppContext.Provider value={state}>
            <div className="container-fluid">
                <Header />
                <Page />
            </div>
        </AppContext.Provider>
    )
}

export default App;