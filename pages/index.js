import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../templates/header";
import Card from "../templates/card";

import { useTrainer } from "../hooks/useTrainer";

export default function Home() {
  const { trainer } = useTrainer();
  console.log(trainer);

  let content;
  let user = false;

  if (user) {
    content = <UserHome />;
  } else {
    content = <NoUserHome />;
  }

  return (
    <main>
      <Header />
      {content}
    </main>
  );
}

export function UserHome() {
  return (
    <>
      <div className="px-10 justify-between">
        <h2>Hi, Trainer</h2>
        <h3>Level 4</h3>
      </div>
      {/* <BattleDeck deck={[]} numbered={true} />
      <BattleHistory /> */}
    </>
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
