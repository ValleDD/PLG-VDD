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
  };
  
  export interface UserContextInterface {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
  }
  
  const defaultState = {
    user: {
      name: "",
      password: "",
    },
    setUser: (user: User) => {},
  } as UserContextInterface;
  
  export const UserContext = createContext(defaultState);
  