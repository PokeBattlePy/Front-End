import Card from "./card";

export default function Collection(props) {
    return(
        <div className="grid gap-4 grid-cols-5">
            {props.collection.map((pokemon, idx) => (
                <Card key={idx} pokemon={pokemon} size={"sm"}/>
            ))}
        </div>
    )
}