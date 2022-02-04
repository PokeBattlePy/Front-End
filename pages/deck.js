import Header from "../templates/header";
import BattleDeck from "../templates/battleDeck";
import { useTrainer } from "../hooks/useTrainer";
import { useUser } from "../context/userContext";
import Collection from "../templates/collection";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

export default function Deck() {
  const { tokens } = useUser();
  const { trainer } = useTrainer();

  return (
    <div className="gb-text">
      <Header />

      <CardEditor deck={trainer ? trainer.decks : []} collection={trainer ? trainer.cards : []} />

    </div>
  );
}

function CardEditor(props) {

  const { tokens, user } = useUser();

  const initialDeck = props.deck.map((card) => card)

  const [deck, setDeck] = useState(initialDeck)

  const placeholder = {
    "pokemon_int": 22,
    "name": "empty",
    "rarity": "common",
    "types": [""],
    "moves": {
      "base": { "name": "whirlwind", "power": null, "class": "status", "type": "normal" },
      "special": { "name": "razor-wind", "power": 80, "class": "special", "type": "normal" }
    },
    "official_artwork": "/questionMark.png",
    "stats": {
      "hp": 0,
      "attack": 0,
      "special-attack": 0,
      "defense": 0,
      "special-defense": 0
    }
  }

  function removeCard(remove_pokemon) {
    console.log("removing ", remove_pokemon.name);

    let newDeck = deck.map((deck_pokemon) => deck_pokemon.name == remove_pokemon.name ? placeholder : deck_pokemon);

    setDeck(newDeck);
  }


  function addCard(add_pokemon) {
    let dupe = false
    let added = false
    deck.forEach((pokemon) => {
      if (pokemon.name == add_pokemon.name) {
        toast.error(`Can't have more than 1 ${pokemon.name} in deck!`, {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
        });
        dupe = true
        return
      }
    })
    if (dupe) {
      return
    }

    let newDeck = deck.map((pokemon) => pokemon);
    for (let i = 0; i < newDeck.length; i++) {
      if (newDeck[i].name == placeholder.name) {
        newDeck[i] = add_pokemon;
        added = true;
        setDeck(newDeck);
        break
      }
    }

    if (!added) {
      toast.error("Deck full! Please remove a pokemon before adding a new pokemon", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
      });
      let foo
    }
  }

  async function handleSaveDeck() {
    let deckFilled = true;

    deck.forEach((card) => card.name == "empty" ? deckFilled = false : false);

    if (deckFilled) {

      const info = {
        headers: {
          "Authorization": "Bearer " + tokens.access
        },
      }
      const body = {
        "decks": deck
      }
      //make request to API to save deck
      let res = await axios.patch(`https://poke-battle-py.herokuapp.com/trainer/${user.id}/`, body, info)

      toast.success("Deck saved!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true
      })
     }else {
      toast.error("cannot save deck with empty slots!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true
      })
      let foo
    }
  }

  return (
    <div className="flex-column w-4/5 m-auto">

      <div>
        <h2 className="my-5">Current Deck</h2>
        <BattleDeck deck={deck} numbered={true} removeCard={removeCard} button={true} />
        <button className="underline" onClick={handleSaveDeck}>Save Deck</button>
      </div>

      <div>
        <h2 className="my-5">Collection</h2>

        <Collection collection={props.collection} addCard={addCard} />
      </div>

    </div>
  )
}