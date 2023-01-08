const {
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require("../pokemon-species");

const Pokemon = require("../pokemon");

const { strengthsTable, weaknessTable } = require("../table-data");

// pokemon > types > species

describe("pokemon-species, extended class tests", () => {
  test("test type classes have access to properties on the prototype chain", () => {
    // ARRANGE
    const testPokemon = new Charmander({
      name: "daniel",
      hitPoints: 10,
      attackDamage: 1,
    });
    // ACT
    const name = testPokemon.name;
    const type = testPokemon.type;
    const health = testPokemon.hitPoints;
    const damage = testPokemon.attackDamage;
    const special = testPokemon.move;
    // ASSERT
    expect(name).toBe("daniel");
    expect(type).toBe("fire");
    expect(health).toBe(10);
    expect(damage).toBe(1);
    expect(special).toBe("ember");
  });

  test("test species classes have access to methods on the prototype chain", () => {
    const testPokemon = new Squirtle({
      name: "daniel",
      hitPoints: 10,
      attackDamage: 1,
    });
    const enemyPokemon = new Pokemon({
      name: "Jim",
      hitPoints: 10,
      attackDamage: 1,
      type: "rock",
    });
    const strength = testPokemon.isEffectiveAgainst(enemyPokemon);
    expect(strength).toBe(true);
  });

  test("test the strong against and weak against arrays are appropriate for species.", () => {
    // ARRANGE
    const testPokemon = new Rattata({
      name: "daniel",
      hitPoints: 10,
      attackDamage: 1,
    });
    // ACT
    const effectiveAgainst = strengthsTable[testPokemon.type];
    const weakAgainst = weaknessTable[testPokemon.type];
    // ASSERT
    //Rattata is a normal pokemon and effective against / weak to; nothing.
    expect(effectiveAgainst).toEqual([]);
    expect(weakAgainst).toEqual([]);
  });
});
