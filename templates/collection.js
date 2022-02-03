import Card from "./card";

export default function Collection(props) {

  function handleAdd(pokemon){
    props.addCard(pokemon)
  }

  return (
    <div className="grid gap-4 grid-cols-5">
      {props.collection.map((pokemon, idx) => (
        <div key={idx}>
          <button className="hover:underline" onClick={() => handleAdd(pokemon)}>Add {pokemon.name}</button>
          <Card pokemon={pokemon} size={"sm"} />
        </div>
      ))}
    </div>
  )
}