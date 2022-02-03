import { createContext, useContext, useState } from "react";
import jwt from 'jsonwebtoken';
import axios from "axios";

const baseUrl = 'https://poke-battle-py.herokuapp.com/'
const tokenUrl = baseUrl + 'api/token/'
const trainerUrl = baseUrl + 'trainer/'

const UserContext = createContext();

export function useUser() {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error('You forgot UserProvider!');
  }
  return user;
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
  
  //set context state
  const [state, setState] = useState({
    tokens:null,
    trainer: initTrainer,
    user: null,
    login,
    logout,
    updateContext,
  });

  //context methods
  async function login(username, password){

    const res = await axios.post(tokenUrl, {username, password});

    const decodedAccess = jwt.decode(res.data.access);

    const newState = {
      tokens: res.data,
      user: {
        username: username,
        id: decodedAccess.user_id
      }
    }
    setState(prevState => ({ ...prevState, ...newState}));
  }

  function logout(){

    const newState = {
      tokens:null,
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
