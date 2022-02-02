import Header from "../templates/header";
import BattleDeck from "../templates/battleDeck";
import { useUser } from "../context/userContext";
import Collection from "../templates/collection";

export default function Deck() {
  const {trainer} = useUser();
  console.log(trainer.pokemon_collection)

  return (
    <div>
      <Header />
      
      <div className="flex-column w-4/5 m-auto">

      <div className="sticky top-0">
        <h2>Current Deck</h2>
        <BattleDeck deck={trainer.pokemon_deck.pokemon} numbered={true} />
      </div>

      <div>
        <h2>Collection</h2>
        
        <Collection collection={trainer.pokemon_collection}/>
      </div>

      </div>

    </div>
  );
}
