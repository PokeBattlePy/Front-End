import useSWR, { mutate } from "swr";
import axios from "axios";
import { useUser } from "../context/userContext";

const baseUrl = 'https://poke-battle-py.herokuapp.com/'
export const trainerUrl = baseUrl + 'trainer/'


export function useTrainer() {

  const {tokens, user, logout} = useUser();
  
  const { data, error, mutate } = useSWR([trainerUrl + (user ? user.id : ''), tokens], fetchTrainer);
  // const { data, error, mutate } = useSWR("/api/trainer", fetchTrainer);

  async function fetchTrainer(url) {

    if (!tokens) {
      return;
    }

    try {
      const res = axios.get(url, config());
      return (await res).data;

    } catch (err) {
      handleError(err);
    }
  } 

  async function createResource(info) {
    try {
      await axios.post(trainerUrl, info, config());
      mutate();
    } catch (err) {
      handleError(err);
    }
  }

  function config() {

    return {
        headers: {
            'Authorization': 'Bearer ' + tokens.access
        }
    };
}


  return {
    trainer: data,
    isLoading: !error && !data,
    isError: error
  };
}
