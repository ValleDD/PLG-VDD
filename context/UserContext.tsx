
  import { createContext, Dispatch, SetStateAction, useContext} from 'react';

  export interface User {
    name: string;
    password: string;
    isLoggedIn: boolean;
  }
  
  export interface UserContextInterface {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
    login: (name: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    isLoggedIn: boolean;
  }
  export const UserContext = createContext<UserContextInterface | undefined>(undefined);


  
 

  
  