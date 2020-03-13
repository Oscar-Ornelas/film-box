import React, {useState} from "react"
import {useHistory} from 'react-router-dom';
const BackgroundContext = React.createContext()

function BackgroundContextProvider(props) {
    const [background, setBackground] = useState("");
    const history = useHistory();

    return (
        <BackgroundContext.Provider value={{background, setBackground}}>
            {props.children}
        </BackgroundContext.Provider>
    )
}

export {BackgroundContextProvider, BackgroundContext}
