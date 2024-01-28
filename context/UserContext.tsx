import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
  } from "react";
  
  export type User = {
    name: string;
    password: string;
    isLoggedIn: boolean;
  };
  
  export interface UserContextInterface {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
  }
  
  const defaultState = {
    user: {
      name: "",
      password: "",
      isLoggedIn: false,
    },
    setUser: (user: User) => {},
  } as UserContextInterface;
  
  export const UserContext = createContext(defaultState);
  