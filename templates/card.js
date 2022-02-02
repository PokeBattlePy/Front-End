export default function Card({ pokemon, size }) {

  let background = pokemon.types[0]

  let card_size = {
    "norm":"h-120 w-60",
    "sm":"h-60 w-40"
  }

  let text_size = {
    "norm":"",
    "sm":"text-xs"
  }

  let title_size = {
    "norm":"text-lg",
    "sm":""
  }

  let tiers = {
    1: "Common",
    2: "Uncommon",
    3: "Rare",
    4: "Epic",
    5: "Legendary"
  }

  return (
    // outter border of card
    // card container
    <div className={`relative ${card_size[size]} p-1 rounded-md border-2 border-slate-500 font-bold ${background}`}>


        <div className={`flex items-center rounded-md p-1 justify-center ${title_size[size]} bg-slate-500/50`}>
          <p className="rarity mx-1">{tiers[pokemon.tier]}</p>
          <p className="capitalize mx-1">{pokemon.name}</p>
        </div>
        <img
          className='m-auto'
          src={pokemon.art}
          alt="Pikachu"
          width="90%"
          height="auto"
          position="justify:center"
          />
        <p className="flex items-center justify-center capitalize">{pokemon.types[0]}</p>
        <div className={`flex justify-around ${text_size[size]}`}>
          <p>{pokemon.stats.hp} HP</p>
          <p>{pokemon.stats.attack} ATK</p>
          <p>{pokemon.stats.defense} DEF</p>
        </div>
        {/* <div className="attack stat">30 attack</div> */}
        {/* <div className="abilities">Shock, Flop, Dash, Burrow</div> */}

    </div>
  );
}
