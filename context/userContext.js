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
  //initial values
  const initTrainer = {
    name: "",
    active_game:null,
    pokemon_deck: {
      rating: 0,
      pokemon: []
    },
    pokemon_collection: [],
    currency: 0
  }

  const initUser = null
  
  //set context state
  const [state, setState] = useState({
    trainer: initTrainer,
    user: null,
    login,
    logout,
    updateContext,
  });

  //context methods
  async function login(){
    let res = await axios.get("/api/trainer");

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

  function updateContext(newState){
    setState(prevState => ({...prevState, ...newState}))
  }

  //provider
  return (
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  )
}
