import Header from "../templates/header";
import Image from "next/image";
import { useState } from "react";

import axios from "axios";
import { useUser } from "../context/userContext";
import { useTrainer } from "../hooks/useTrainer";

export default function Arena() {

  const { trainer } = useTrainer()
  const [game, setGame] = useState(null)
  const [message, setMessage] = useState("Test")
  const { user, tokens } = useUser()

  // HP bar styling function
  function setHp(current, max) {
    let style = {}
    if (current / max > 0.5) {
      style["backgroundColor"] = `rgb(52, 211, 153)`
    }
    else if (current / max > 0.1) {
      style["backgroundColor"] = `rgb(250, 204, 21)`
    }
    else if (current / max <= 0.1) {
      style["backgroundColor"] = `rgb(248, 113, 113)`
    }

    style["transitionDuration"] = "1s"
    style["transitionProperty"] = "width"
    style["width"] = `${(current / max) * 100}%`

    return style
  }


  async function handleStart() {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + tokens.access
      },
      body: {
        "deck": trainer.decks
      }
    }

    let game = await axios.post("https://poke-battle-py.herokuapp.com/game/", config)
    console.log(game.data)
    setGame(game.data)
  }

  // function getActivePokemon(game){
  //   //game:{
  //     //
  //   return
  // }

  return (
    <main className="gb-text">
      <Header />
      {/* {game ?  */}
      <div className=' my-10 relative gb-text font-bold justify-center'>
        {/* battle area container */}
        <div className="grid grid-cols-3 gap-2 w-[1200px] m-auto border-4 border-gray-800">

          {/* row 1 */}
          <div className="h-50 w-240 row-start-1 row-span-1 col-start-1 col-span-1 px-2">
            pokemon cards
          </div>

          <div className="row-start-1 row-span-1 col-start-3 col-span-1">
            <p className='text-right px-2'>Opponent</p>
          </div>

          {/* row 2 */}

          <div className="relative h-112 w-240 row-start-2 row-span-1 col-start-1 col-span-3 border-8 border-slate-500">


            {/* big arena image */}
            <Image src='/arenaGrass.png' alt='background' layout='responsive' height={112} width={240} quality={100} />


            {/*  top */}
            <div className='absolute rounded-md top-5 left-10 w-[400px] h-[100px] bg-slate-400 border-2 border-slate-600 skew-x-[-35deg]'>

              <p className='absolute left-5 bottom-0 px-1 skew-x-[35deg]'>HP</p>
              <p className='absolute left-0 top-0 px-2 py-1
               skew-x-[35deg]'>*OPs Pokemon*</p>
              <p className='absolute left-0 top-4 px-6 py-2 skew-x-[35deg]'>*OPs rarity*</p>
              {/* hp bar base */}
              <div className='absolute px-0 right-0 bottom-0 bg-gradient-to-l from-gray-50 rounded-full w-[300px] h-[25px]'>
                {/* actual health of pokemon */}
                <div className='right-0 bottom-0 rounded-md h-full' style={setHp(100, 100)}></div>
              </div>
            </div>


            {/* bottom */}
            <div className='absolute rounded-md bottom-5 right-10 w-[400px] h-[100px] bg-slate-400 border-2 border-slate-600 skew-x-[-35deg]'>
              <p className='absolute left-5 bottom-0 px-2 skew-x-[35deg]'>HP</p>
              <p className='absolute left-0 top-0 px-2 py-1
               skew-x-[35deg]'>*OPs Pokemon*</p>
              <p className='absolute left-0 top-4 px-6 py-2 skew-x-[35deg]'>*OPs rarity*</p>
              {/* hp bar base */}
              <div className='absolute px-0 right-0 bottom-0 bg-gradient-to-l from-gray-50 rounded-md w-[300px] h-[25px]'>

                {/* actual health of pokemon */}
                <div className={`right-0 bottom-0 rounded-md h-full`} style={setHp(100, 100)}></div>
              </div>
            </div>

            {/* opponent's pokemon sprite */}
            <div className='absolute py-0 top-[5%] right-20'>
              <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' alt='frontview' height='fill' width='400' />
            </div>
            {/* your pokemon sprite */}
            <div className='absolute py-0 top-[30%] left-10'>
              <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png' alt='backview' height='fill' width='500' />
            </div>
          </div>

          {/* row 3 */}
          <div className="row-start-3 row-span-1 col-start-1 col-span-1">
            <p className="px-2">Player: {trainer && trainer.name}</p>
          </div>

          <div className="row-start-3 row-span-1 col-start-2 col-span-1 text-center">
            <p>{message}</p>
          </div>

          <div className="row-start-3 row-span-1 col-start-3 col-span-1">
            <p className="px-2 text-right">Players cards</p>
          </div>


          {/* row 4 */}
          <div className="p-5 mx-20 w-auto flex justify-around row-start-4 row-span-1 col-start-1 col-span-3 bg-gray-500 border-4 border-gray-700 rounded-lg">
            <Controls game={game} setGame={setGame} />
          </div>

        </div>
      </div>
      <div className="flex justify-center m-auto"><button className="p-2 bg-gray-400 border-4 rounded-lg my-5 hover:bg-gray-200" onClick={() => handleStart()}>Start Game</button></div>
      {/* } */}
    </main>

  )
}

function Controls(props) {
  const { user, tokens } = useUser()

  async function handleChoice(selection) {
    const info = {
      "game": props.game.id,
      "selection": selection
    }
    let config = {
      headers: {
        'Authorization': 'Bearer ' + tokens.access
      },
      body: info
    }

    let game = await axios.post("https://poke-battle-py.herokuapp.com/game/battle/", config)
    props.setGame(game.data)
  }

  return (
    <div className='flex w-full justify-around'>
      <p className="text-white">Actions:</p>
      <button onClick={() => handleChoice("base")} className="bg-blue-500 border-4 border-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
        Attack
      </button>
      <button onClick={() => handleChoice("special")} className="bg-blue-500 border-4 border-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
        Special Attack
      </button>
      <button onClick={() => handleChoice("defense")} className="bg-blue-500 border-4 border-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
        Defense
      </button>
    </div>
  )
}