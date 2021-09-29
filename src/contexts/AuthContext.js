import React,{useContext} from 'react'


const AuthContext=React.createContext();

export const useAuth=()=>{
    return useContext(AuthContext)
}

export const AuthProvider = (children) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}


