import Header from "../templates/header";
import BattleDeck from "../templates/battleDeck";
import { useTrainer } from "../hooks/useTrainer";
import { useUser } from "../context/userContext";
import Collection from "../templates/collection";
import { useState } from "react";

export default function Deck() {
  const { tokens } = useUser();
  const { trainer } = useTrainer();

  const [deck, setDeck] = useState(trainer ? trainer.decks : [])

  const placeholder = {
    "pokemon_int": 22,
    "name": "empty",
    "rarity": "common",
    "types": ["normal"],
    "moves": {
      "base": { "name": "whirlwind", "power": null, "class": "status", "type": "normal" },
      "special": { "name": "razor-wind", "power": 80, "class": "special", "type": "normal" }
    },
    "official_artwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    "stats": {
      "hp": 0,
      "attack": 0,
      "special-attack": 0,
      "defense": 0,
      "special-defense": 0
    }
  }

  function removeCard(remove_pokemon) {
    newDeck = deck.map((deck_pokemon) => deck_pokemon == remove_pokemon ? placeholder : pokemon)

    while (newDeck.length < 3) {
      newDeck.append(placeholder)
    }

    setDeck(newDeck)
  }

  function addCard(pokemon) {
    if (deck.includes(pokemon)) {
      alert("Pokemon already in deck!")
      return
    }
    else if (deck.includes(placeholder)) {
      newDeck = deck.map((pokemon) => pokemon);
      for (let i = 0; i < newDeck.length; i++) {
        if (newDeck[i] == placeholder) {
          newDeck[i] = pokemon
          break
        }
      }
      setDeck(newDeck)
    } else {
      alert("Deck full! Please remove a pokemon before adding a new pokemon")
    }
  }

  function handleSaveDeck() {
    const info = {
      headers: {
        "Authorization": tokens.access
      },
      body: {
        "decks": deck
      }
    }
    //make request to API so save deck
  }

  return (
    <div className="gb-text">
      <Header />

      <div className="flex-column w-4/5 m-auto">

        <div>
          <h2 className="my-5">Current Deck</h2>
          <BattleDeck deck={trainer ? trainer.decks : []} numbered={true} removeCard={removeCard} button={true} />
          <button className="underline" onClick={handleSaveDeck}>Save Deck</button>
        </div>

        <div>
          <h2 className="my-5">Collection</h2>

          <Collection collection={trainer ? trainer.cards : []} addCard={addCard} />
        </div>

      </div>

    </div>
  );
}
