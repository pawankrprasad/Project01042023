import { createContext, useContext, useState } from "react";

const AuthContext = createContext();



export const AuthProvider = ({children}) =>{
    const _token = localStorage.getItem("token");
    const [token, setToken] = useState(_token)

    const setAuthToken = (token) =>{
        localStorage.setItem("token", token);
        setToken(token)
    }


    return(
        <AuthContext.Provider value={{token, setAuthToken}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);

export default AuthContext;


