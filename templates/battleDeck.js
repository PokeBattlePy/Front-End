import Card from "./card";

export default function BattleDeck(props) {

  function handleRemove(pokemon){
    props.removeCard(pokemon);
  }

  return (
      <div className="flex w-full justify-around text-center p-5">
        {props.deck.map((pokemon, idx) => {
          return (
            <div key={idx}>
              {props.button ? <button className="hover:underline hover:bg-gray-200 bg-gray-300 border-double border-4 border-black p-1 m-1" onClick={() => handleRemove(pokemon)}>Remove</button> : false}
              <Card pokemon={pokemon} size={"norm"}/>
              {props.numbered ? <p>SLOT {idx + 1}</p> : false}
            </div>
          );
        })}
      </div>
  );
}
