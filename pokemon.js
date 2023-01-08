const { strengthsTable, weaknessTable } = require("./table-data");
//POKEMON CLASS
class Pokemon {
  /* constructor method uses a destructured object, I can pass an object with just the properties I want and default the rest */
  constructor({
    name = "name",
    type = "normal",
    hitPoints = 0,
    attackDamage = 0,
    move = "tackle",
  } = {}) {
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }

  isEffectiveAgainst(pokemon) {
    // this function uses the 'strengths' look up table
    // to see if the passed in pokemon is included in the value where the key matches this.type

    //array of types this pokemon type is effective against
    const effectiveAgainst = strengthsTable[this.type];

    return effectiveAgainst.includes(pokemon.type) ? true : false;
  }

  isWeakTo(pokemon) {
    const weakAgainst = weaknessTable[this.type];
    return weakAgainst.includes(pokemon.type) ? true : false;
    // return [pokemon.type, weakAgainst];
  }

  takeDamage({ damage = 0, pokemon = null }) {
    // THIS FUNCTION HAS TWO WAYS OF IMPLEMENTING DAMAGE
    // IT CAN BE INVOKED WITH THE RETURN OF THE ENEMIES USEMOVE()
    // defendingPokemon.takeDamage({ damage: attackingPokemon.useMove() });
    if (damage !== 0 && pokemon === null) {
      this.hitPoints -= damage;
    }

    // OR
    // IT CAN BE INVOKED WITH THE ENEMY POKEMON
    // defendingPokemon.takeDamage({pokemon: attackingPokemon})
    if (pokemon !== null && damage === 0) {
      //reduce hitpoints by using enemy pokemon attackdamage amount
      const damagePoints = pokemon.attackDamage;
      this.hitPoints -= damagePoints;
    }
  }

  useMove() {
    console.log(`${this.name} attacked with ${this.move}`);
    return this.attackDamage;
  }

  hasFainted() {
    return this.hitPoints <= 0 ? true : false;
  }
}

module.exports = Pokemon;
