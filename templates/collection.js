import Card from "./card";

export default function Collection(props) {
    return(
        <div className="flex-none md:flex-3">
            {props.collection.map((pokemon, idx) => (
                <Card key={idx} pokemon={pokemon} size={"sm"}/>
            ))}
        </div>
    )
}