class Pokeball {
  constructor() {
    this.pokemonArray = [];
  }

  throw(pokemon) {
    const pokemonArg = pokemon !== undefined;
    const isEmpty = this.pokemonArray.length === 0;

    if (pokemonArg && isEmpty) {
      console.log(`${pokemon.name} was caught in a Pokeball!`);
      this.pokemonArray.push(pokemon);
    }
    if (pokemonArg && !isEmpty) {
      console.log("Damn, this pokeball is full");
    }
    if (!pokemonArg && !isEmpty) {
      console.log(`GO ${this.pokemonArray[0].name}!`);
      return this.pokemonArray[0];
    }
    if (!pokemonArg && isEmpty) {
      console.log("This pokeball is empty, choose a different one");
      return "empty";
    }
  }

  isEmpty() {
    return this.pokemonArray.length === 0;
  }

  contains() {
    return this.isEmpty() ? "empty..." : this.pokemonArray[0].name;
  }
}

module.exports = Pokeball;
