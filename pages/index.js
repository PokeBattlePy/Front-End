import Header from "../templates/header";
import Card from "../templates/card";
import BattleDeck from "../templates/battleDeck";
import BattleHistory from "../templates/battleHistory";

import { useUser } from "../context/userContext";
import {useTrainer} from "../hooks/useTrainer";


export default function Home() {
  const {user} = useUser();

  return (
    <main className="gb-text">
      {/* {user ? <p>Logged in</p> : <p>not logged in</p>} */}
      <Header />
      {user ? <UserHome/> : <NoUserHome/>}
    </main>
  );
}


export function User2Home() {
  const {trainer} = useTrainer();
  return <p>{JSON.stringify(trainer)}</p>
}
export function UserHome() {

  const {trainer} = useTrainer();

  return (
    <div className="justify-center w-4/5 m-auto">
      <div className="flex py-5 justify-between text-lg font-bold">
        <h2>Hi, {trainer && trainer.name}</h2>
        <h3>Level 4</h3>
      </div>
      <p className="pb-5">Select Battle to go fight other trainers!</p>
      <h2 className="font-bold text-lg">Current Deck</h2>
      <BattleDeck deck={trainer ? trainer.decks : []} numbered={true} />
      <BattleHistory history={[]}/>
    </div>
  );
}

export function NoUserHome() {
  let examplePokemon = [
    //put some pokemon here (3)
  ];

  return (
    <>
      <div className="w-full pt-10 pb-40 border-b-4 border-black justify-center flex-column text-center">
        <h2 className="text-2xl font-bold">PokeBattlePy</h2>
        <p className="py-4">
          Collect, build your team,
          <br />
          battle others
        </p>
        <button className="px-4 py-1 border-2 border-black">Sign Up</button>
      </div>
      <div className="w-full py-10 justify-center text-center flex-column">
        <p>Collect over 150 different Pokemon</p>
        <div>
          {examplePokemon.map((pokemon, idx) => (
            <Card key={idx} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  );
}
