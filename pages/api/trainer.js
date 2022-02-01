// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const pikachu = {
    tier: 1,
    name: "pikachu",
    types:["electric"],
    sprites:{
      front-default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      back-default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    },
    stats:{
      hp: 50,
      attack: 33,
      defense: 25,
      spatk: 35,
      spdef: 40
    },
    moves:[
      {
        name: "tackle",
        type: "normal",
        power: "40",
      },
      {
        name: "tackle",
        type: "normal",
        power: "40",
      },
      {
        name: "tackle",
        type: "normal",
        power: "40",
      },
      {
        name: "tackle",
        type: "normal",
        power: "40",
      },
    ]
  }

  const trainer = {
    name:"test_user",
    active_game:null,
    pokemon_deck:{
      rating: 3,
      pokemon:{

      }
    }
  }

  res.status(200).json(trainer)
}
