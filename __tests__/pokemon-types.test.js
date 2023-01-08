const { FirePokemon, WaterPokemon, GrassPokemon } = require("../pokemon-types");
const Pokemon = require("../pokemon");
const { strengthsTable, weaknessTable } = require("../table-data");

describe("pokemon-types, extended class tests", () => {
  test("test type classes have access to properties of Pokemon prototype", () => {
    // ARRANGE
    const testPokemon = new FirePokemon({
      name: "daniel",
      hitPoints: 10,
      attackDamage: 1,
      move: "fire storm",
    });
    // ACT
    const name = testPokemon.name;
    const health = testPokemon.hitPoints;
    const damage = testPokemon.attackDamage;
    const special = testPokemon.move;
    // ASSERT
    expect(name).toBe("daniel");
    expect(health).toBe(10);
    expect(damage).toBe(1);
    expect(special).toBe("fire storm");
  });
  test("test type classes have access to methods of Pokemon prototype", () => {
    const testPokemon = new WaterPokemon({
      name: "daniel",
      hitPoints: 10,
      attackDamage: 1,
      move: "aqua storm",
    });
    const enemyPokemon = new Pokemon({
      name: "barry",
      type: "rock",
      hitPoints: 10,
      attackDamage: 1,
      move: "aqua storm",
    });
    const strength = testPokemon.isEffectiveAgainst(enemyPokemon);
    expect(strength).toBe(true);
  });
  test("test the strong against and weak against arrays are appropriate for type.", () => {
    // ARRANGE
    const testPokemon = new GrassPokemon({
      name: "daniel",
      hitPoints: 10,
      attackDamage: 1,
      move: "lawnmower",
    });
    // ACT
    const effectiveAgainst = strengthsTable[testPokemon.type];
    const weakAgainst = weaknessTable[testPokemon.type];
    // ASSERT
    expect(effectiveAgainst).toEqual(["fairy", "rock", "water"]);
    expect(weakAgainst).toEqual(["electric", "poison", "fire", "grass"]);
  });
});
