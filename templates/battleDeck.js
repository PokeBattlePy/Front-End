import Card from "./card";

export default function BattleDeck(props) {
  function handleRemove(id){
    props.handleRemove(id);
  }

  return (
      <div className="flex w-full justify-around text-center p-5">
        {props.deck.map((pokemon, idx) => {
          return (
            <div key={idx}>
              {props.button ? <button className="hover:underline" onClick={() => handleRemove(pokemon)}>Remove</button> : false}
              <Card pokemon={pokemon} size={"norm"}/>
              {props.numbered ? <p>{idx + 1}</p> : false}
            </div>
          );
        })}
      </div>
  );
}
