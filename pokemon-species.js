const { FirePokemon, WaterPokemon, GrassPokemon } = require("./pokemon-types");
const Pokemon = require("./pokemon");

class Charmander extends FirePokemon {
  constructor({ name, hitPoints, attackDamage }) {
    super({
      name: name,
      hitPoints: hitPoints,
      attackDamage: attackDamage,
      move: "ember",
    });
  }
}

class Squirtle extends WaterPokemon {
  constructor({ name, hitPoints, attackDamage }) {
    super({
      name: name,
      hitPoints: hitPoints,
      attackDamage: attackDamage,
      move: "water gun",
    });
  }
}

class Bulbasaur extends GrassPokemon {
  constructor({ name, hitPoints, attackDamage }) {
    super({
      name: name,
      hitPoints: hitPoints,
      attackDamage: attackDamage,
      move: "vine whip",
    });
  }
}

class Rattata extends Pokemon {
  constructor({ name, hitPoints, attackDamage }) {
    super({
      name: name,
      hitPoints: hitPoints,
      attackDamage: attackDamage,
    });
  }
}

module.exports = { Charmander, Squirtle, Bulbasaur, Rattata };
