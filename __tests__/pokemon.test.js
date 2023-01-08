const { strengthsTable, weaknessTable } = require("../table-data");
const Pokemon = require("../pokemon");
//ARRANGE
//ACT
//ASSERT

/* pokemon class contructor has a destructured object as its parameter so arguments passed must be an object with specified parameters and values

new Pokemon({ name: 'Daniel', move: 'jump'  });

  */

describe("tests for pokemon class properties", () => {
  test("test for name property", () => {
    //ARRANGE
    const testPokemon = new Pokemon({ name: "Daniel" });
    const name = testPokemon.name;
    //ACT
    //ASSERT
    expect(name).toBe("Daniel");
    expect(Pokemon.hasOwnProperty("name")).toBe(true);
  });

  test("test for type property", () => {
    const testPokemon = new Pokemon({ type: "fire" });
    const type = testPokemon.type;
    expect(type).toBe("fire");
  });

  test("test for hitPoints property", () => {
    const testPokemon = new Pokemon({ hitPoints: 200 });
    const hitPoints = testPokemon.hitPoints;
    expect(hitPoints).toBe(200);
  });

  test("test for attackDamage property", () => {
    const testPokemon = new Pokemon({ attackDamage: 100 });
    const attackDamage = testPokemon.attackDamage;
    expect(attackDamage).toBe(100);
  });

  test("test for move property", () => {
    const testPokemon = new Pokemon({ move: "wiggle" });
    const move = testPokemon.move;
    expect(move).toBe("wiggle");
  });
});

describe("tests for pokemon class methods", () => {
  test("test for strengths look up table data", () => {
    const testPokemon = new Pokemon({ type: "poison" });
    const arr = strengthsTable[testPokemon.type];
    expect(arr).toEqual(["grass", "fairy"]);
  });

  test("test for weakness look up table data", () => {
    const testPokemon = new Pokemon({ type: "grass" });
    const arr = weaknessTable[testPokemon.type];
    expect(arr).toEqual(["electric", "poison", "fire", "grass"]);
  });

  test("test for isEffectiveAgainst method", () => {
    const testPokemon = new Pokemon({ type: "poison" });
    const enemyPokemon = new Pokemon({ type: "grass" });
    const result = testPokemon.isEffectiveAgainst(enemyPokemon);
    expect(result).toBe(true);
  });

  test("test for isWeakTo method", () => {
    const testPokemon = new Pokemon({ type: "electric" });
    const attackPokemon = new Pokemon({ type: "ice" });
    const result = testPokemon.isWeakTo(attackPokemon);
    expect(result).toBe(true);
  });

  test("test for take damage method", () => {
    //ARRANGE
    const testPokemon = new Pokemon({
      name: "pikachu",
      type: "electric",
      hitPoints: 10,
      attackDamage: 1,
      move: "bolt strike",
    });
    const attackPokemon = new Pokemon({
      name: "blastoise",
      type: "water",
      hitPoints: 10,
      attackDamage: 1,
      move: "aqua blast",
    });
    //ACT
    testPokemon.takeDamage({ pokemon: attackPokemon });
    //ASSERT

    expect(testPokemon.hitPoints).toBe(9);
  });

  test("test for use move method", () => {
    //ARRANGE
    const testPokemon = new Pokemon({
      name: "blastoise",
      type: "water",
      hitPoints: 10,
      attackDamage: 1,
      move: "aqua blast",
    });
    //ACT
    const specialMove = testPokemon.useMove();
    //ASSERT
    expect(specialMove).toBe(1);
    expect(typeof specialMove).toBe("number");
  });

  /*  test('console.log the text "hello"', () => {
    console.log = jest.fn();
    log('hello');
    // The first argument of the first call to the function was 'hello'
    expect(console.log).toHaveBeenCalledWith('hello');
  }); */

  test("test for has fainted method", () => {
    //ARRANGE
    const testPokemon = new Pokemon({
      name: "pikachu",
      type: "electric",
      hitPoints: 10,
      attackDamage: 1,
      move: "bolt strike",
    });
    const attackPokemon = new Pokemon({
      name: "blastoise",
      type: "water",
      hitPoints: 10,
      attackDamage: 1,
      move: "aqua blast",
    });
    //ACT

    //invoking takeDamage with enemy pokemon
    testPokemon.takeDamage({ pokemon: attackPokemon });
    testPokemon.takeDamage({ pokemon: attackPokemon });
    testPokemon.takeDamage({ pokemon: attackPokemon });
    testPokemon.takeDamage({ pokemon: attackPokemon });
    testPokemon.takeDamage({ pokemon: attackPokemon });
    testPokemon.takeDamage({ pokemon: attackPokemon });

    //invoking takeDamage with enemy useMove()
    testPokemon.takeDamage({ damage: attackPokemon.useMove() });
    testPokemon.takeDamage({ damage: attackPokemon.useMove() });
    testPokemon.takeDamage({ damage: attackPokemon.useMove() });
    testPokemon.takeDamage({ damage: attackPokemon.useMove() });
    //ASSERT

    expect(testPokemon.hasFainted()).toBe(true);
    expect(testPokemon.hitPoints).toBe(0);
  });
});
