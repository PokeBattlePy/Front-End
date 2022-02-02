import Card from "../templates/card";
import Header from "../templates/header";

export default function Test() {
  const pikachu = {
    tier: 1,
    name: "pikachu",
    types: ["electric"],
    sprites: {
      frontDefault:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      backDefault:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
    },
    art: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    stats: {
      hp: 50,
      attack: 40,
      defense: 30,
      spatk: 35,
      spdef: 25
    },
    moves: [
      {
        name: "mega-punch",
        power: 80,
        accuracy: 85
      },
      {
        name: "thunder",
        power: 100,
        accuracy: 90
      },
      {
        name: "tackle",
        power: 40,
        accuracy: 100
      },
      {
        name: "gnaw",
        power: 30,
        accuracy: 100
      }
    ]
  };

  return (
    <>
      <Header />
      <Card pokemon={pikachu}/>
    </>
  );
}
