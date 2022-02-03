import Header from "../templates/header";
import BattleDeck from "../templates/battleDeck";
import { useTrainer } from "../hooks/useTrainer";
import Collection from "../templates/collection";
import { useState } from "react";

export default function Deck() {
  const {trainer} = useTrainer();
  
  const [deck, setDeck] = useState(trainer ? trainer.decks : [])

  function removeCard(id){
    newDeck = deck.map((pokemon) => pokemon.id == id ? placeholder : pokemon)

    while (newDeck.length<3){
      newDeck.append(placeholder)
    }

    setDeck(newDeck)
  }

  return (
    <div className="gb-text">
      <Header />
      
      <div className="flex-column w-4/5 m-auto">

      <div>
        <h2 className="my-5">Current Deck</h2>
        <BattleDeck deck={trainer ? trainer.decks : []} numbered={true} removeCard={removeCard} button={true}/>
      </div>

      <div>
        <h2 className="my-5">Collection</h2>
        
        <Collection collection={trainer ? trainer.cards : []}/>
      </div>

      </div>

    </div>
  );
}
