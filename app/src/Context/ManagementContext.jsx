import { createContext, useState } from "react";



export const ManagementContext=createContext();

const ManagementContextProvider=(props)=>{

    const [loggedIn,setLoggedIn]=useState(false);
    const [stays,setStays]=useState(true);

    const value={
        loggedIn,
        setLoggedIn,
        stays,
        setStays
    };

    return (
        <ManagementContext.Provider value={value}>{props.children}</ManagementContext.Provider>
    )
}

export  default ManagementContextProvider;