export default function Card({ pokemon }) {

  let background = pokemon.types[0]

  return (
    // outter border of card
    // card container
    <div className="relative h-120 w-60 rounded-md border-2 border-sky-500">
      {/* //colors["bug"].background */}
      <div className={background}>
        <div className="flex items-center justify-center">
          {pokemon.name}
        </div>
        <img
          src={pokemon.art}
          alt="Pikachu"
          width="200"
          height="400"
          position="justify:center"
        />
        <div className="sprite name flex items-center justify-center">Electric</div>
        <div className="rarity  absolute top-0 right-0">1st tier</div>
        <div className="absolute top-0 left-0">100hp</div>
        <div className="attack and defense flex justify-around">
          <p>{pokemon.stats.defense} defense</p>
          <p>{pokemon.stats.attack} attack</p>
        </div>
        {/* <div className="attack stat">30 attack</div> */}
        {/* <div className="abilities">Shock, Flop, Dash, Burrow</div> */}
      </div>
    </div>
  );
}
