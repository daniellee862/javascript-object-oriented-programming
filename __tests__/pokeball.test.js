const Pokeball = require("../pokeball");
const { Charmander } = require("../pokemon-species");

// ARRANGE
// ACT
// ASSERT

describe("tests for pokeball", () => {
  test("store a pokemon when thrown, empty and passed a pokemon arg", () => {
    // ARRANGE
    const testPokemon = new Charmander({
      name: "daniel",
      hitPoints: 10,
      attackDamage: 1,
    });

    //create instance
    const pokeball = new Pokeball();

    // ACT
    // call throw method with pokemon arg
    pokeball.throw(testPokemon);

    // ASSERT
    expect(pokeball.pokemonArray).toEqual([
      {
        attackDamage: 1,
        hitPoints: 10,
        move: "ember",
        name: "daniel",
        type: "fire",
      },
    ]);
  });

  test("deny storage when thrown, full; 1 pokemon, and passed pokemon arg", () => {
    // ARRANGE
    const testPokemon = new Charmander({
      name: "daniel",
      hitPoints: 10,
      attackDamage: 1,
    });

    //create instance
    const pokeball = new Pokeball();
    // ACT
    // call throw method with pokemon arg
    pokeball.throw(testPokemon);

    //and again!
    pokeball.throw(testPokemon);

    // ASSERT
    expect(pokeball.pokemonArray).toEqual([
      {
        attackDamage: 1,
        hitPoints: 10,
        move: "ember",
        name: "daniel",
        type: "fire",
      },
    ]);
  });

  test("release pokemon for battle when thrown and full, with no arg passed", () => {
    // ARRANGE
    const testPokemon = new Charmander({
      name: "daniel",
      hitPoints: 10,
      attackDamage: 1,
    });
    //create instance
    const pokeball = new Pokeball();

    // ACT
    // call throw method with pokemon arg to catch
    pokeball.throw(testPokemon);

    //throw full pokeball with no arg
    const fullPokeballThrow = pokeball.throw();

    // ASSERT
    expect(fullPokeballThrow).toEqual({
      attackDamage: 1,
      hitPoints: 10,
      move: "ember",
      name: "daniel",
      type: "fire",
    });
  });

  test("inform user it is empty when thrown, empty and no pokemon arg passed", () => {
    const pokeball = new Pokeball();
    //throw empty with no arg
    const result = pokeball.throw();
    expect(result).toBe("empty");
  });

  test("isEmpty method;  return a Boolean representing whether or not a Pokemon is stored inside it", () => {
    const pokeball = new Pokeball();
    const result = pokeball.isEmpty();
    expect(result).toBe(true);
  });

  test("contains method; return the name of the Pokemon that is stored,", () => {
    const testPokemon = new Charmander({
      name: "daniel",
      hitPoints: 10,
      attackDamage: 1,
    });

    //create instance
    const pokeball = new Pokeball();

    // call throw method with pokemon arg
    pokeball.throw(testPokemon);

    //contains method
    const contains = pokeball.contains();
    //

    expect(contains).toBe("daniel");
  });
  test("contains method; return empty..., when empty", () => {
    //create instance
    const pokeball = new Pokeball();

    //contains method
    const contains = pokeball.contains();
    //

    expect(contains).toBe("empty...");
  });
});
