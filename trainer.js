const Pokeball = require("./pokeball");

class Trainer {
  constructor(name) {
    this.name = name;
    this.pokeballOne = new Pokeball();
    this.pokeballTwo = new Pokeball();
    this.pokeballThree = new Pokeball();
    this.pokeballFour = new Pokeball();
    this.pokeballFive = new Pokeball();
    this.pokeballSix = new Pokeball();
    this.belt = [
      this.pokeballOne,
      this.pokeballTwo,
      this.pokeballThree,
      this.pokeballFour,
      this.pokeballFive,
      this.pokeballSix,
    ];
  }

  catch(pokemon) {
    //create a new array of empty pokeballs
    const emptyPokeballArray = [];
    this.belt.forEach((pokeball) => {
      if (pokeball.isEmpty()) {
        emptyPokeballArray.push(pokeball);
      }
    });

    //if empty array has empty pokeballs,
    //take the first one and throw it with the pokemon arg
    if (emptyPokeballArray.length > 0) {
      const nextEmptyPokeball = emptyPokeballArray[0];
      nextEmptyPokeball.throw(pokemon);
      return `${this.name} caught ${pokemon.name}!`;
    } else {
      console.log(`Damn. No empty Pokeballs!`);
      return `Damn. No empty Pokeballs!`;
    }
  }

  getPokemon(pokemon) {
    //declare variable for potential pokeball
    let correctPokeball;
    //search each pokeball in the belt
    //look for match against passed pokemon
    this.belt.forEach((pokeball) => {
      if (pokeball.pokemonArray[0]?.name === pokemon) {
        //if match;
        correctPokeball = pokeball;
      }
    });

    //if correct pokeball is not undefined, return the returned value of its throw method
    return correctPokeball !== undefined
      ? correctPokeball.throw()
      : "Sorry. I dont own that Pokemon.";
  }
}

module.exports = Trainer;
