import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../templates/header";
import Card from "../templates/card";
import BattleDeck from "../templates/battleDeck";
import BattleHistory from "../templates/battleHistory";

import { useUser } from "../context/userContext";


export default function Home() {
  const {trainer, user} = useUser();
 
  console.log(trainer);


  return (
    <main>
      <Header />
      {user ? <UserHome trainer={trainer}/> : <NoUserHome/>}
    </main>
  );
}

export function UserHome({trainer}) {
  return (
    <div className="justify-center w-4/5 m-auto">
      <div className="flex py-5 justify-between">
        <h2>Hi, {trainer.name}</h2>
        <h3>Level 4</h3>
      </div>
      <h2>Current Deck</h2>
      <BattleDeck deck={trainer.pokemon_deck.pokemon} numbered={true} />
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
