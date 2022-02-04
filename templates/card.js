import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function Card({ pokemon, size }) {

  const [isFlipped, changeFlip] = useState(false);

  let background = pokemon.types[0]

  let card_size = {
    "norm": "h-[20.5rem] w-60",
    "sm": "h-60 w-40",
    "xs": "h-40 w-28"
  }

  let text_size = {
    "norm": "text-sm",
    "sm": "text-xs",
    "xs": "text-2xs"
  }

  let title_size = {
    "norm": "",
    "sm": "text-sm",
    "xs": "text-2xs"
  }

  let text_margin = {
    "norm": "m-7",
    "sm":"m-3",
    "xs":"m-1"
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
    // card 
    <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>

      {/* Card Front */}
      <div onClick={() => changeFlip(true)} key="front" className={`cursor-pointer relative ${card_size[size]} ${text_size[size]} text-center p-1 rounded-md border-4 ${borders[pokemon.rarity]} font-bold ${background} m-auto`}>


        <div className={`flex items-center rounded-md p-1 justify-center ${title_size[size]} bg-slate-500/50`}>
          <p className="capitalize mx-1">{pokemon.name}</p>
        </div>

        <img
          className='m-auto'
          src={pokemon.official_artwork}
          alt="Pikachu"
          width={size != "xs" ? "90%" : "80%"}
          height="auto"
          position="justify:center"
        />

        <p className="flex items-center justify-center capitalize">{pokemon.types[0]}</p>
        <div className={`flex justify-around ${text_size[size]}`}>
          <p>{Math.floor(pokemon.stats.hp)}<br /> HP</p>
          <p>{Math.floor(pokemon.stats.attack)}<br /> ATK</p>
          <p>{Math.floor(pokemon.stats.defense)}<br /> DEF</p>
        </div>
        <p className="rarity mx-1 capitalize">{pokemon.rarity}</p>

      </div >

      {/* Card Back */}
      <div onClick={() => changeFlip(false)} key="back" className={`cursor-pointer relative ${card_size[size]} ${text_size[size]} text-center p-1 rounded-md border-4 ${borders[pokemon.rarity]} font-bold ${background} m-auto`}>


        <div className={`flex items-center rounded-md p-1 justify-center ${title_size[size]} bg-slate-500/50`}>
          <p className="capitalize mx-1">{pokemon.name}</p>
        </div>

        <div className={text_margin[size]}>
          <p className='font-bold underline'>Base</p>
          <p className='capitalize'>{pokemon.moves.base.name}</p>
          <p>Power: {pokemon.moves.base.power}</p>
        </div>

        <div className={text_margin[size]}>
          <p className='font-bold underline'>Special</p>
          <p className='capitalize'>{pokemon.moves.special.name}</p>
          <p>Power: {pokemon.moves.special.power}</p>
        </div>

        {size != "xs" ? <>
          <p className="flex items-center justify-center capitalize">{pokemon.types[0]}</p>
          <div className={`flex justify-around ${text_size[size]}`}>
            <p>{Math.floor(pokemon.stats.hp)}<br /> HP</p>
            <p>{Math.floor(pokemon.stats.attack)}<br /> ATK</p>
            <p>{Math.floor(pokemon.stats.defense)}<br /> DEF</p>
          </div>
          <p className="rarity mx-1 capitalize">{pokemon.rarity}</p>
        </> : false
        }

      </div >
    </ReactCardFlip>

  );
}
