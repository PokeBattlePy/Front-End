import Header from "../templates/header";
import Card from "../templates/card";
import BattleDeck from "../templates/battleDeck";
import BattleHistory from "../templates/battleHistory";
import Image from "next/image";

import { useUser } from "../context/userContext";
import { useTrainer } from "../hooks/useTrainer";


export default function Home() {
  const { user } = useUser();

  return (
    <main className="gb-text bg-[url('/poke_back.png')] h-full">
      {/* {user ? <p>Logged in</p> : <p>not logged in</p>} */}
      <Header />
      {user ? <UserHome /> : <NoUserHome />}
    </main>
  );
}


export function UserHome() {

  const { trainer } = useTrainer();
  console.log(trainer);

  return (
    <div className="justify-center w-4/5 m-auto bg-[url('/homebackground.jpg')] bg-no-repeat bg-cover h-screen text-center">
      <div className="py-5 border-double border-4 border-black bg-opacity-80 bg-gray-300 p-4 h-full">
        <div className="flex py-5 justify-around text-lg font-bold">
          <h2 className="border-double border-4 border-black bg-opacity-80 bg-gray-300 p-2">Hi, {trainer && trainer.name}</h2>
          <h3 className="border-double border-4 border-black bg-opacity-80 bg-gray-300 p-2">Level 4</h3>
        </div>
        <p className="pb-5 border-double border-4 border-black bg-opacity-80 bg-gray-300 w-1/2 p-2 m-auto">Select Battle to go fight other trainers!</p>
        <h2 className="font-bold text-lg border-double border-4 border-black bg-opacity-80 bg-gray-300 w-72 my-7 p-2 m-auto">Current Deck:</h2>
        <BattleDeck deck={trainer ? trainer.decks : []} numbered={true} />
        <BattleHistory trainer={trainer} />
      </div>
    </div>

  );
}

export function NoUserHome() {
  let examplePokemon = [
    {
      "pokemon_int": 22,
      "name": "fearow",
      "rarity": "common",
      "types": ["normal", "flying"],
      "moves": {
        "base": { "name": "whirlwind", "power": 50, "class": "status", "type": "normal" },
        "special": { "name": "razor-wind", "power": 80, "class": "special", "type": "normal" }
      },
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
      "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png",
      "stats": {
        "hp": 71.5,
        "attack": 99.00000000000001,
        "special-attack": 67.10000000000001,
        "defense": 71.5,
        "special-defense": 67.10000000000001
      }
    },
    {
      "pokemon_int": 89,
      "name": "muk",
      "rarity": "rare",
      "types": ["poison"],
      "moves": {
        "base": { "name": "fire-punch", "power": 75, "class": "physical", "type": "fire" },
        "special": { "name": "pound", "power": 40, "class": "physical", "type": "normal" }
      },
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
      "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
      "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/89.png",
      "stats": {
        "hp": 105,
        "attack": 105,
        "special-attack": 65,
        "defense": 75,
        "special-defense": 100
      }
    },
    {
      "pokemon_int": 37,
      "name": "vulpix",
      "rarity": "epic",
      "types": [
        "fire"
      ],
      "moves": {
        "base": {
          "name": "body-slam",
          "power": 85,
          "class": "physical",
          "type": "normal"
        },
        "special": {
          "name": "headbutt",
          "power": 70,
          "class": "physical",
          "type": "normal"
        }
      },
      "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
      "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
      "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png",
      "stats": {
        "hp": 49.4,
        "attack": 53.300000000000004,
        "special-attack": 65,
        "defense": 52,
        "special-defense": 84.5
      }
    }
  ];

  return (
    <div className="border-b-4 border-black">
      <div className="w-full pt-10 pb-40 border-b-4 border-black justify-center flex-column text-center">
        <div className="p-5 w-1/2 m-auto border-double border-4 border-black bg-opacity-90 bg-gray-300">

          <h2 className="text-2xl font-bold">PokeBattlePy</h2>
          <p className="py-4">
            Collect, build your team,
            <br />
            battle others
          </p>
          <button className="px-4 py-1 border-2 border-black">Sign Up</button>
        </div>
      </div>
      <div className="w-2/3 py-10 justify-center text-center flex-column mx-auto my-10 border-double border-4 border-black bg-opacity-90 bg-gray-300">
        <p>Collect over 150 different Pokemon!</p>
        <div className="flex justify-around my-10">
          {examplePokemon.map((pokemon, idx) => (
            <Card key={idx} pokemon={pokemon} size={"norm"} />
          ))}
        </div>
      </div>
    </div>
  );
}
