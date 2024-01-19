import {  User, UserContext } from "../context/UserContext";

import {
    ReactNode,
    useState,
  } from "react";


  type UserProviderProps = {
    children: ReactNode;
  };
  
export default function UserProvider({children}:UserProviderProps) {
    const [user, setUser] = useState<User>({
      name: '',
      password: '',
    });
  
    return (
      <UserContext.Provider value={{user, setUser}}>
        {children}
      </UserContext.Provider>
    );
  }