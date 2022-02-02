import axios from "axios";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUser() {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error('You forgot UserProvider!');
  }
  return user
}

export function UserProvider(props){
  const [state, setState] = useState({
    trainer: null,
    user: null,
    login,
    logout,
  });

  async function login(){
    const response = await axios.get()

    const newState = {
      user: true,
      
    }
  }
}