import Card from "./card";

export default function Collection(props) {

  function handleAdd(pokemon){
    props.addCard(pokemon)
  }

  return (
    <div className="grid gap-4 grid-cols-5">
      {props.collection.map((pokemon, idx) => (
        <div className="flex-column" key={idx}>
          <button className="hover:underline w-max" onClick={() => handleAdd(pokemon)}>Add {pokemon.name}</button>
          <Card pokemon={pokemon} size={"sm"} />
        </div>
      ))}
    </div>
  )
}