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
    let res = await axios.get("/api/trainer");

    // let data = fetcher("/api/trainer")

    const newState = {
      user: true,
      trainer: res.data    
    }
    setState(prevState => ({ ...prevState, ...newState}));
  }

  function logout(){
    const newState = {
      user:null,
      trainer:null,
    }
    setState(prevState => ({ ...prevState, ...newState}));
  }

  return (
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  )
}
