import Card from "./card";

export default function BattleDeck(props) {
  return (
    <div>
      <h2>Battle Deck</h2>
      <div>
        {props.deck.Map((pokemon, idx) => {
          return (
            <div>
              <Card pokemon={pokemon} />
              {props.numbered ? <p>{idx + 1}</p> : false}
            </div>
          );
        })}
      </div>
    </div>
  );
}
