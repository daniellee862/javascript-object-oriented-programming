const { Bulbasaur, Squirtle } = require("../pokemon-species");
const Trainer = require("../trainer");
const Battle = require("../battle");

describe("tests for battle class", () => {
  test("test for trainer and pokemon properties ", () => {
    // ARRANGE
    //POKEMON
    const bulbasaur = new Bulbasaur({
      name: "Bulbasaur",
      hitPoints: 20,
      attackDamage: 2,
    });
    const squirtle = new Squirtle({
      name: "Squirtle",
      hitPoints: 20,
      attackDamage: 2,
    });

    //TRAINERS
    const daniel = new Trainer("Daniel");
    const fran = new Trainer("Fran");

    // ACT
    //CATCH POKEMON
    daniel.catch(bulbasaur);
    fran.catch(squirtle);
    //THROW POKEMON
    const danielPokemon = daniel.getPokemon("Bulbasaur");
    const franPokemon = fran.getPokemon("Squirtle");

    //INSTANTIATE BATTLE CLASS
    const battle = new Battle(daniel, danielPokemon, fran, franPokemon);

    //FIRST ATTACK
    battle.fight(danielPokemon);

    // ASSERT
    expect(franPokemon.hitPoints).toBe(14);
  });

  test("test fight method", () => {
    // ARRANGE
    //POKEMON
    const bulbasaur = new Bulbasaur({
      name: "Bulbasaur",
      hitPoints: 20,
      attackDamage: 2,
    });
    const squirtle = new Squirtle({
      name: "Squirtle",
      hitPoints: 20,
      attackDamage: 2,
    });

    //TRAINERS
    const daniel = new Trainer("Daniel");
    const fran = new Trainer("Fran");

    // ACT
    //CATCH POKEMON
    daniel.catch(bulbasaur);
    fran.catch(squirtle);
    //THROW POKEMON
    const danielPokemon = daniel.getPokemon("Bulbasaur");
    const franPokemon = fran.getPokemon("Squirtle");

    //INSTANTIATE BATTLE CLASS
    const battle = new Battle(daniel, danielPokemon, fran, franPokemon);

    // ASSERT
    expect(battle.fight(danielPokemon)).toBe(
      "Great attack by Bulbasaur. Its Squirtle's turn next!"
    );
    expect(battle.fight()).toBe(
      "The Battle is underway! Squirtle has 14 hitpoints remaining and Bulbasaur has 20 hitpoints remaining"
    );
  });
});
