import Card from "./card";

export default function Collection(props) {

  function handleAdd(pokemon){
    props.addCard(pokemon)
  }

  return (
    <div className="grid gap-4 grid-cols-5">
      {props.collection.map((pokemon, idx) => (
        <div className="justify-center align-middle w-full text-center" key={idx}>
          <button className="hover:underline hover:bg-gray-200 m-auto bg-gray-300 border-double border-4 border-black p-1 w-max" onClick={() => handleAdd(pokemon)}>Add to deck</button>
          <Card pokemon={pokemon} size="sm" />
        </div>
      ))}
    </div>
  )
}