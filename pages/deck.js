import Header from "../templates/header";
import BattleDeck from "../teamplates/battleDeck";

export default function Deck() {
  return (
    <main>
      <Header />
      <div className="sticky top-0">
        <BattleDeck deck={[]} numbered={true} />
      </div>
    </main>
  );
}