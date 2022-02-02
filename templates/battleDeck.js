import Card from "./card";

export default function BattleDeck(props) {
  return (
      <div className="flex w-full justify-around text-center p-5">
        {props.deck.map((pokemon, idx) => {
          return (
            <div key={idx}>
              <Card pokemon={pokemon} size={"norm"}/>
              {props.numbered ? <p>{idx + 1}</p> : false}
            </div>
          );
        })}
      </div>
  );
}
