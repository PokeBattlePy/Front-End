import Header from "../templates/header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import axios from "axios";
import { useUser } from "../context/userContext";
import { useTrainer } from "../hooks/useTrainer";

import Card from "../templates/card";


export default function Arena() {

  const { trainer } = useTrainer()
  const [message, setMessage] = useState("Test")
  const { user, tokens } = useUser()

  const [game, setGame] = useState(null)
  const [win, setWin] = useState(0)

  const [opAnim, setOpAnim] = useState("")
  const [userAnim, setUserAnim] = useState("")

  // HP bar styling function
  function setHp(pokemon, user) {
    let current = pokemon.stats.hp
    let max = null
    game[`${user}_pokemon`].map(poke => {
      if (poke.name == pokemon.name) {
        max = poke.stats.hp
      }
    })
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
    setWin(0)

    let config = {
      headers: {
        'Authorization': 'Bearer ' + tokens.access
      },
      body: {
        "deck": trainer.decks,
        "game": game
      }
    }

    let new_game = await axios.post("https://poke-battle-py.herokuapp.com/game/", config)

    setMessage(new_game.data.last_move)
    setGame(new_game.data)

  }


  return (
    <main className='gb-text bg-[url("/poke_back.png")] h-screen'>
      <Header />
      <div className="">
        {game ?
          <div className='my-10 relative gb-text font-bold justify-center bg-[url("/poke_back.png")]'>
            {/* battle area container */}
            <div className="grid grid-cols-3 gap-2 w-[1200px] m-auto border-double border-4 border-black bg-opacity-95 bg-gray-300">

              {/* row 1 */}
              <div className="h-50 w-240 row-start-1 row-span-1 col-start-1 col-span-1 px-2">
                {/* <BattleDeck /> */}
                <CardsDisplay pokemon={game ? game.comp_poke_status : []} />
              </div>

              <div className="row-start-1 row-span-1 col-start-3 col-span-1">
                <p className='text-right px-2'>Opponent</p>
                <p className='text-right px-2'>{game.ghost}</p>
              </div>

              {/* row 2 */}

              <div className="relative h-112 w-240 row-start-2 row-span-1 col-start-1 col-span-3 border-8 border-slate-500">


                {/* big arena image */}
                <Image src='/arenaGrass.png' alt='background' layout='responsive' height={112} width={240} quality={100} />


                {/*  top */}
                <div className='absolute rounded-md top-5 left-10 w-[400px] h-[100px] bg-slate-400 border-2 border-slate-600 skew-x-[-35deg]'>

                  <p className='absolute left-1 bottom-0 px-1 skew-x-[35deg]'>HP {game.active_comp_pokemon.stats.hp}</p>
                  <p className='absolute left-0 top-0 px-2 py-1 capitalize
               skew-x-[35deg]'>{game.active_comp_pokemon.name}</p>
                  <p className='absolute left-0 top-4 px-6 py-2 skew-x-[35deg]'>*{game.active_comp_pokemon.rarity}*</p>
                  {/* hp bar base */}
                  <div className='absolute px-0 right-0 bottom-0 bg-gradient-to-l from-gray-50 rounded-full w-[300px] h-[25px]'>
                    {/* actual health of pokemon */}
                    <div className='right-0 bottom-0 rounded-md h-full' style={setHp(game.active_comp_pokemon, 'comp')}></div>
                  </div>
                </div>


                {/* bottom */}
                <div className='absolute rounded-md bottom-5 right-10 w-[400px] h-[100px] bg-slate-400 border-2 border-slate-600 skew-x-[-35deg]'>
                  <p className='absolute left-1 bottom-0 px-2 skew-x-[35deg]'>HP {game.active_user_pokemon.stats.hp}</p>
                  <p className='absolute left-0 top-0 px-2 py-1
               skew-x-[35deg] capitalize'>{game.active_user_pokemon.name}</p>
                  <p className='absolute left-0 top-4 px-6 py-2 skew-x-[35deg]'>*{game.active_user_pokemon.rarity}*</p>
                  {/* hp bar base */}
                  <div className='absolute px-0 right-0 bottom-0 bg-gradient-to-l from-gray-50 rounded-md w-[300px] h-[25px]'>

                    {/* actual health of pokemon */}
                    <div className={`right-0 bottom-0 rounded-md h-full`} style={setHp(game.active_user_pokemon, 'user')}></div>
                  </div>
                </div>

                {/* opponent's pokemon sprite */}
                <div className='absolute py-0 top-[5%] right-20'>
                  <div className={`relative ${opAnim}`}>
                    <img src={`${game.active_comp_pokemon.front}`} alt='frontview' height='fill' width='400' />
                  </div>
                </div>
                {/* your pokemon sprite */}
                <div className='absolute py-0 top-[30%] left-10'>
                  <div className={`relative ${userAnim}`}>
                    <img src={`${game.active_user_pokemon.back}`} alt='backview' height='fill' width='500' />
                  </div>
                </div>
              </div>

              {/* row 3 */}
              <div className="row-start-3 row-span-1 col-start-1 col-span-1">
                <p className="px-2">Player: {trainer && trainer.name}</p>
              </div>

              <div className="row-start-3 row-span-1 col-start-2 col-span-1 text-center">
                <p className="capitalize">{message}</p>
              </div>

              <div className="row-start-3 row-span-1 col-start-3 col-span-1">
                <CardsDisplay pokemon={game ? game.user_poke_status : []} />
              </div>


              {/* row 4 */}
              <div className="p-5 mx-20 w-auto flex justify-around row-start-4 row-span-1 col-start-1 col-span-3 bg-gray-500 border-4 border-gray-700 rounded-lg">
                <Controls game={game} setGame={setGame} setOpAnim={setOpAnim} setUserAnim={setUserAnim} setMessage={setMessage} setWin={setWin} />
              </div>

            </div>
          </div>
          : <div className="flex justify-center m-auto"><button className="p-2 bg-gray-100 border-double border-black border-4 rounded-lg my-5 hover:bg-gray-300 w-64 h-24" onClick={() => handleStart()}>Start Game</button></div>
        }


      </div>

      {win >= 1 &&
        <div className="absolute left-[50%] bottom-[50%] mx-[-500px] my-[-100px] justify-center bg-white h-[200px] w-[1000px] border-double border-4 border-black">

          {win == 2 &&
              <p className="text-center mt-10 text-4xl">You Win</p>
              }

          {win == 1 &&
              <p className="text-center mt-10 text-4xl">You Lose</p>
          }

          <div className="flex justify-center m-auto">
            <Link href="/deck">
              <a className="p-2 mx-2 bg-gray-100 border-double border-black border-4 rounded-lg my-5 hover:bg-gray-300 w-60 text-center">Back to Deck</a>
            </Link>
            <button className="p-2 mx-2 bg-gray-100 border-double border-black border-4 rounded-lg my-5 hover:bg-gray-300 w-60 text-center" onClick={() => handleStart()}>Play Again</button>
          </div>
        </div>}

    </main>

  )
}

function Controls(props) {
  const { user, tokens } = useUser()

  async function handleChoice(selection) {
    const info = {
      "game": props.game,
      "selection": selection
    }
    let config = {
      headers: {
        'Authorization': 'Bearer ' + tokens.access
      },
      body: info
    }

    props.setOpAnim("shake")
    setTimeout(() => props.setOpAnim(""), 1000);

    props.setUserAnim("shake")
    setTimeout(() => props.setUserAnim(""), 1000);

    //player action
    if (selection != "defense") {
      let foo
    }


    let updated_game = await axios.put("https://poke-battle-py.herokuapp.com/game/battle/", config)

    if (updated_game.data.active_comp_pokemon && updated_game.data.active_user_pokemon) {
      props.setMessage(`${updated_game.data.active_comp_pokemon.name} used *${updated_game.data.last_move}* on ${updated_game.data.active_user_pokemon.name}`)
    } else {
      props.setMessage(`*Game Over*`)

    }
    if (updated_game.data.active_comp_pokemon == null) {
      props.setWin(2)
      updated_game.data.active_comp_pokemon = updated_game.data.comp_poke_status[2]
      updated_game.data.active_comp_pokemon.stats.hp = 0

    } if (updated_game.data.active_user_pokemon == null) {
      props.setWin(1)
      updated_game.data.active_user_pokemon = updated_game.data.user_poke_status[2]
      updated_game.data.active_user_pokemon.stats.hp = 0
    }


    props.setGame(updated_game.data)
  }

  return (
    <div className='z-0 flex w-full justify-around'>
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

export function CardsDisplay(props) {

  return (
    <div className="flex justify-around">
      {props.pokemon.map((pokemon, idx) => {
        return (
          <Card key={idx} pokemon={pokemon} size="xs" />
        )
      })}
    </div>
  )
}