const Trainer = require("../trainer");
const { Charmander } = require("../pokemon-species");

describe("trainer tests", () => {
  test("test trainer has a belt with six empty pokeballs", () => {
    const trainerDan = new Trainer();
    const belt = trainerDan.belt;
    expect(belt).toEqual([
      { pokemonArray: [] },
      { pokemonArray: [] },
      { pokemonArray: [] },
      { pokemonArray: [] },
      { pokemonArray: [] },
      { pokemonArray: [] },
    ]);
  });
  test("test that the catch method uses an empty pokeball to catch the passed pokemon", () => {
    const testPokemon = new Charmander({
      name: "Daniel",
      hitPoints: 10,
      attackDamage: 1,
    });
    const trainerDan = new Trainer();
    const catchPokemon = trainerDan.catch(testPokemon);
    expect(catchPokemon).toBe("You caught Daniel!");
  });

  test("test catch method with no empty pokeballs left", () => {
    const testPokemon = new Charmander({
      name: "Daniel",
      hitPoints: 10,
      attackDamage: 1,
    });
    const trainerDan = new Trainer();
    trainerDan.catch(testPokemon);
    trainerDan.catch(testPokemon);
    trainerDan.catch(testPokemon);
    trainerDan.catch(testPokemon);
    trainerDan.catch(testPokemon);
    trainerDan.catch(testPokemon);
    const catchPokemon = trainerDan.catch(testPokemon);
    expect(catchPokemon).toBe(`Damn. No empty Pokeballs!`);
  });

  test("test getPokemon returns a pokemon when passed name as an argument", () => {
    const testPokemon = new Charmander({
      name: "Megazord",
      hitPoints: 10,
      attackDamage: 5,
    });
    const trainerDan = new Trainer();
    trainerDan.catch(testPokemon);

    const getMegazord = trainerDan.getPokemon("Megazord");
    expect(getMegazord).toEqual(testPokemon);
  });
});
