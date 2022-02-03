export default function Card({ pokemon, size }) {

  let background = pokemon.types[0]

  let card_size = {
    "norm":"h-120 w-60",
    "sm":"h-60 w-40"
  }

  let text_size = {
    "norm":"text-sm",
    "sm":"text-xs"
  }

  let title_size = {
    "norm":"",
    "sm":"text-sm"
  }

  let borders = {
    "common": "border-stone-500", //gray
    "uncommon": "border-lime-500", //green
    "rare": "border-cyan-500", //blue
    "epic": "border-fuchsia-600", //purple
    "legendary": "border-amber-400" //gold
  }



  return (
    // outter border of card
    // card container
    <div className={`relative ${card_size[size]} ${text_size[size]} text-center p-1 rounded-md border-4 ${borders[pokemon.rarity]} font-bold ${background}`}>


        <div className={`flex items-center rounded-md p-1 justify-center ${title_size[size]} bg-slate-500/50`}>
          <p className="capitalize mx-1">{pokemon.name}</p>
        </div>
        <img
          className='m-auto'
          src={pokemon.official_artwork}
          alt="Pikachu"
          width="90%"
          height="auto"
          position="justify:center"
          />
        <p className="flex items-center justify-center capitalize">{pokemon.types[0]}</p>
        <div className={`flex justify-around ${text_size[size]}`}>
          <p>{Math.floor(pokemon.stats.hp)}<br/> HP</p>
          <p>{Math.floor(pokemon.stats.attack)}<br/> ATK</p>
          <p>{Math.floor(pokemon.stats.defense)}<br/> DEF</p>
        </div>
        <p className="rarity mx-1 capitalize">{pokemon.rarity}</p>
        {/* <div className="attack stat">30 attack</div> */}
        {/* <div className="abilities">Shock, Flop, Dash, Burrow</div> */}

    </div>
  );
}
