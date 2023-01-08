const Pokemon = require("./pokemon");

class FirePokemon extends Pokemon {
  constructor({ name, hitPoints, attackDamage, move }) {
    super({
      name: name,
      type: "fire",
      hitPoints: hitPoints,
      attackDamage: attackDamage,
      move: move,
    });
  }
}

class WaterPokemon extends Pokemon {
  constructor({ name, hitPoints, attackDamage, move }) {
    super({
      name: name,
      type: "water",
      hitPoints: hitPoints,
      attackDamage: attackDamage,
      move: move,
    });
  }
}

class GrassPokemon extends Pokemon {
  constructor({ name, hitPoints, attackDamage, move }) {
    super({
      name: name,
      type: "grass",
      hitPoints: hitPoints,
      attackDamage: attackDamage,
      move: move,
    });
  }
}

module.exports = { FirePokemon, WaterPokemon, GrassPokemon };
