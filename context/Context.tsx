import React, { useContext, useState } from 'react'

type User={
    username:string;
}

type ContextProps = {
    user: User | null;
    login: (userData: User)=>void;
    logout: ()=> void;
    isAuthenticated: boolean;

}

const Context = React.createContext<ContextProps | undefined>(undefined);


type ContextProviderProps ={
    children: JSX.Element|JSX.Element[]
}


export const ContextProvider: React.FC<ContextProviderProps>=({children})=>{
    const [user,setUser]= useState<User | null>(null)
    const [isAuthenticated,setIsAuthenticated]= useState<boolean>(false)

    const login = (userData: User)=>{
        setUser(userData);
        setIsAuthenticated(true);
    };

    const logout=()=>{
        setUser(null)
        setIsAuthenticated(false);
    }
    const constextValue: ContextProps = {
        user,
        login,
        logout,
        isAuthenticated,

    }
    return<Context.Provider value={constextValue}>{children}</Context.Provider>
}

export const useAuth =()=>{
    const context = useContext(Context)

    if(!context){
        throw new Error('useAuth debe ser utilizado dentro de AuthoProvide')
    }
    return context;
}

  



