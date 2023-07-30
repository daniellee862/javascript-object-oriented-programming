# Javascript Object Oriented Programming

Pokemon battle game using Object Oriented Programming.

### Data Structures.

Below you will find a plan of data structures that are included in the game.

## Pokemon (one class)

### Properties

- A Pokemon has following properties:
  - `name`: the name its given
  - `type`: the type the Pokemon is, it should default to "normal" (we'll add some more types later)
  - `hitPoints`: the amount of health the Pokemon has, represented as a number
  - `attackDamage`: the amount of damage a Pokemon can inflict (should be a number)
  - `move`: This is the move the Pokemon does when battling, this should default to "tackle"

### Methods

- `isEffectiveAgainst`
  - This takes as an argument a Pokemon and return a Boolean if the Pokemon is effective against the given Pokemon, "normal" Pokemon are not effective against anything
- `isWeakTo`
  - This takes as an argument a Pokemon and return a Boolean if this pokemon is weak to the given Pokemon
  - "normal" Pokemon are not weak to anything
- `takeDamage`
  - Takes a number and reduce its health by the number given
- `useMove`
  - Returns the Pokemon's attackDamage
  - Console logs "PokemonX used PokemonX's move"
- `hasFainted`
  - When a Pokemon's health is reduced to 0 they faint
  - hasFainted will return a Boolean based on whether the Pokemon has fainted

## Pokemon Types (3 classes that should extend Pokemon) -> Fire, Water, Grass

- `fire` pokemon are strong against grass, and weak against water.
- `grass` pokemon are strong against water, and weak against fire.
- `water` pokemon are strong against fire and weak against grass.
- The only difference is that each Pokemon type will have different isEffectiveAgainst and isWeakTo

## Pokemon Species (4 classes each extending from the relevant class) -> Charmander, Squirtle, Bulbasaur, Rattata

- `Charmander` is a `FirePokemon` and its move is `"ember"`
- `Squirtle` is a `WaterPokemon` and its move is `"water gun"`
- `Bulbasaur` is a `GrassPokemon` its move is `"vine whip"`
- `Rattata` is a `Pokemon`

## Pokeball

`Pokeballs` are the containers for Pokemon. They are used in the game to catch pokemon and to release the Pokemon for battle.

Pokeball behaviours include:

- being able to store a Pokemon
- throw it to catch a Pokemon
- throw it to release it for battle
- check which Pokemon is in the Pokeball

### Methods

- `throw`
  - can take a `Pokemon` as an argument. If the pokeball is empty it will capture the passed pokemon. If it isn't empty the user should not be allowed to capture a pokemon with it! The `throw` method should also console log something like ("you caught pokemonX's name")
  - Additionally the method can be invoked with no argument. In this case the method should return the stored Pokemon (ready for battle). The `throw` method should console log something like ("GO pokemonX's name!!") in this scenario. If the ball is empty then the user should be informed.
- `isEmpty`
  - Returns a Boolean representing whether or not a Pokemon is stored inside it
- `contains`
  - Returns the name of the Pokemon that is stored,
  - If the Pokeball is empty returns "empty ..."

## Trainer

- A Trainer has a belt property that has 6 Pokeballs

### Methods

- `catch`
  - takes a Pokemon as an argument
  - Uses one of its empty Pokeball's `throw` method to catch the Pokemon
- `getPokemon`
  - takes the name of a Pokemon
  - Will search for the the Pokemon with that name in the belt
  - Use the Pokeball's throw to return that specific Pokemon

## Battle

- The battle takes two trainers and the names of the Pokemon they wish to battle.

### Methods

- `fight`
  - this take the Pokemon whose turn it is,
  - attack the defending Pokemon (deducting attacker's attack damage from the defender's hit points)
  - end their turn
  - takes each Pokemon's strengths and weaknesses into account
    - if a defender is strong against the attacking type, the attacking type's damage should be multiplied by 0.75.
    - if a defender is weak against the attacking type, the attacking type's damage should be multiplied by 1.25.
  - each attack is followed by an attack message
    - The message will vary depending on the defender's weakness/strength.
  - if the defending Pokemon faints (depletes all hit points), the attacker wins.

## Making the game

Once all the necessary parts were fully tested, I made a working game using the [inquirer library](https://github.com/SBoudrias/Inquirer.js), its a command line application to play your Pokemon battle game. The game should be played using inputs and selections.
