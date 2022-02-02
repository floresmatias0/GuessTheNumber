import React, { useState } from 'react';
import LoggedContext from './LoggedContext';

const StateContext = (props) => {
    const [isLoggendIn, setLoggedIn] = useState(false);

    return (
        <LoggedContext.Provider value={{
            isLoggendIn,
            setLoggedIn
        }}>
            {props.children}    
        </LoggedContext.Provider>
    )
}

export default StateContext;