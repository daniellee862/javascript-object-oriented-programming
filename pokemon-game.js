const inquirer = require("inquirer");
const {
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require("./pokemon-species");
const Trainer = require("./trainer");
const Battle = require("./battle");

// Initial- welcome to pokemon battle. 1.trainer name. 2.choose pokemon 3.Battle!
// In-Game - start. your turn..continue. there turn...continue. etc till ends. reset.

//SETUP
//TRAINERS
let trainer;
const enemyTrainer = new Trainer("Team-Rocket");

//POKEMON
let pokemon;
const enemyPokemon = new Rattata({
  name: "Rattata",
  hitPoints: 10,
  attackDamage: 1,
});

//THROW POKEMON
// const danielPokemon = daniel.getPokemon("Bulbasaur");
// const franPokemon = fran.getPokemon("Squirtle");

const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "trainerName",
        message:
          "Welcome to Pokemon Battle Arena. You must be a Pokemon trainer! What is your name?",
      },
      {
        type: "list",
        name: "pokemonType",
        message: "Choose your Pokemon type!",
        choices: ["Fire", "Water", "Grass", "Normal"],
      },
      {
        type: "input",
        name: "pokemonName",
        message: "Great choice! What is your Pokemon's name?",
      },
    ])
    .then((answers) => {
      //TRAINER
      trainer = new Trainer(answers.trainerName);
      //POKEMON
      const pokemonTable = {
        Fire: new Charmander({
          name: answers.pokemonName,
          hitPoints: 10,
          attackDamage: 1,
        }),
        Water: new Squirtle({
          name: answers.pokemonName,
          hitPoints: 10,
          attackDamage: 1,
        }),
        Grass: new Bulbasaur({
          name: answers.pokemonName,
          hitPoints: 10,
          attackDamage: 1,
        }),
        Normal: new Rattata({
          name: answers.pokemonName,
          hitPoints: 10,
          attackDamage: 1,
        }),
      };
      //
      pokemon = pokemonTable[answers.pokemonType];
      //
    })
    .then(() => {
      //CATCH POKEMON
      trainer.catch(pokemon);
      enemyTrainer.catch(enemyPokemon);
      //START GAME
      gameLoop();
    });
};

//GAME LOOP

const gameLoop = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "areYouReady",
        message: "ARE YOU READY TO BATTLE?",
        choices: ["POKEMON. GO!!!"],
      },
    ])
    .then(() => {
      //INSTANTIATE BATTLE CLASS
      const battle = new Battle(trainer, pokemon, enemyTrainer, enemyPokemon);
      const gameOver = pokemon.hitPoints || enemyPokemon.hitPoints <= 0;
      //
      let attacker = trainer;
      const toggleAttacker = () => {
        attacker === trainer ? (attacker = enemyTrainer) : (attacker = trainer);
      };
      //
      battle.fight(pokemon);
    })
    .then(() => {
      setTimeout;
    });
};

init();
