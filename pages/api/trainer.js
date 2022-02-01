// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const pikachu = {
      tier: 1,
      name: "Pikachu",
      types: ["electric"],
      sprites: {
        frontDefault:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        backDefault:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
      },
      stats: {
        hp: 50,
        attack: 40,
        defense: 30,
        spatk: 35,
        spdef: 25
      },
      moves: [
        {
          name: "mega-punch",
          power: 80,
          accuracy: 85
        },
        {
          name: "thunder",
          power: 100,
          accuracy: 90
        },
        {
          name: "tackle",
          power: 40,
          accuracy: 100
        },
        {
          name: "gnaw",
          power: 30,
          accuracy: 100
        }
      ]
    };
  
    const trainer = {
      name: "test_trainer",
      active_game: null,
      pokemon_deck: {
        rating: 5,
        pokemon: [pikachu, pikachu, pikachu]
      },
      pokemon_collection: [
        pikachu,
        pikachu,
        pikachu,
        pikachu,
        pikachu,
        pikachu,
        pikachu
      ],
      currency: 100
    };
  
    res.status(200).json(trainer);
  }
  