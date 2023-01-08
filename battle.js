class Battle {
  //The arguments passed into the constructor will be class objects.
  constructor(
    trainerOne = "Daniel",
    trainerOnePokemon,
    trainerTwo = "Fran",
    trainerTwoPokemon
  ) {
    this.trainerOne = trainerOne;
    this.trainerOnePokemon = trainerOnePokemon;
    this.trainerTwo = trainerTwo;
    this.trainerTwoPokemon = trainerTwoPokemon;
  }

  fight(pokemon) {
    //ARRANGE DATA
    const trainerOne = this.trainerOne;
    const trainerTwo = this.trainerTwo;
    const pokemonOne = this.trainerOnePokemon;
    const pokemonTwo = this.trainerTwoPokemon;
    //DETERMINE ATTACKING AND DEFENDING POKEMON
    const isPokemonOneAttacking = pokemon === pokemonOne;
    const attackingPokemon = isPokemonOneAttacking ? pokemonOne : pokemonTwo;
    const defendingPokemon = isPokemonOneAttacking ? pokemonTwo : pokemonOne;
    const attackingTrainer = isPokemonOneAttacking ? trainerOne : trainerTwo;
    const defendingTrainer = isPokemonOneAttacking ? trainerTwo : trainerOne;
    //DETERMINE IS EFFECTIVE AGAINST AND WEAKTO
    const isEffectiveAgainst =
      attackingPokemon.isEffectiveAgainst(defendingPokemon);
    const isWeakTo = defendingPokemon.isWeakTo(attackingPokemon);
    //HAS DEFENDING POKEMON FAINTED?
    const hasFainted = defendingPokemon.hasFainted();
    //WINNER MESSAGE IF DEFENDER HAS FAINTED
    const winnerMessage = `POW. Great Shot! ${defendingPokemon.name} has fainted. ${attackingPokemon.name} is the WINNER! Well done ${attackingTrainer.name} `;
    //
    //

    //CHECK FOR PASSED POKEMON ARG. IF NONE RETURN BATTLE UPDATE
    if (pokemon) {
      //CHECK HAS FAINTED, IF NOT; BATTLE. IF YES; RETURN GAMEOVER.
      if (!hasFainted) {
        //
        //INITIAL ATTACK
        defendingPokemon.takeDamage({ damage: attackingPokemon.useMove() });
        //
        hasFainted
          ? console.log(winnerMessage)
          : console.log(
              `KABOOM! ${attackingPokemon.name} hit ${defendingPokemon.name} for ${attackingPokemon.attackDamage} attack damage! `
            );

        //IS ATTACKER STRONG AGAINST DEFENDER?
        if (isEffectiveAgainst) {
          defendingPokemon.takeDamage({
            damage: attackingPokemon.attackDamage,
          });
          hasFainted
            ? console.log(winnerMessage)
            : console.log(
                `${attackingPokemon.name} is naturally strong against ${defendingPokemon.type} type Pokemon. ${attackingPokemon.attackDamage} extra attack damage! `
              );
        }
        //IS DEFENDER WEAK AGAINST ATTACKER?
        if (isWeakTo) {
          defendingPokemon.takeDamage({
            damage: attackingPokemon.attackDamage,
          });
          hasFainted
            ? console.log(winnerMessage)
            : console.log(
                `${defendingPokemon.name} is weak against your ${attackingPokemon.type} type Pokemon. ${attackingPokemon.attackDamage} extra attack damage! ${defendingTrainer.name} looks worried `
              );
        }
        console.log(
          `Great attack by ${attackingPokemon.name}. Its ${defendingPokemon.name}'s turn next! `
        );
        //END OF ATTACKING POKEMONS TURN
        return `Great attack by ${attackingPokemon.name}. Its ${defendingPokemon.name}'s turn next!`;
      } else {
        //IF THE DEFENDING POKEMON HAS FAINTED
        console.log(
          `Game Over! ${defendingPokemon.name} has fainted! ${attackingPokemon.name} is the Winner!!!`
        );
        return "Game Over";
      }
    } else {
      //IF BATTLE.FIGHT() WAS INVOCATED WITHOUT A POKEMON ARG; GIVE BATTLE UPDATE
      console.log(
        `The Battle is underway! ${attackingPokemon.name} has ${attackingPokemon.hitPoints} and ${defendingPokemon.name} has ${defendingPokemon.hitPoints} `
      );
      return `The Battle is underway! ${attackingPokemon.name} has ${attackingPokemon.hitPoints} hitpoints remaining and ${defendingPokemon.name} has ${defendingPokemon.hitPoints} hitpoints remaining`;
    }
  }
}

module.exports = Battle;
