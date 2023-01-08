const strengthsTable = {
  normal: [],
  fire: ["grass", "ice", "fairy"],
  water: ["rock", "fire", "ghost"],
  grass: ["fairy", "rock", "water"],
  electric: ["flying", "water"],
  ice: ["flying", "grass", "water"],
  poison: ["grass", "fairy"],
  rock: ["flying", "fire", "ice"],
  fairy: ["electric", "ghosts"],
  flying: ["grass", "fairy"],
  ghost: ["poison"],
};

const weaknessTable = {
  normal: [],
  fire: ["water", "fire", "rock"],
  water: ["water", "grass", "flying"],
  grass: ["electric", "poison", "fire", "grass"],
  electric: ["fire", "water", "ice"],
  ice: ["fire", "water", "ice"],
  poison: ["ghost", "flying"],
  rock: ["water", "grass", "fairy"],
  fairy: ["poison", "water"],
  flying: ["electric", "fairy"],
  ghost: ["electric"],
};

module.exports = { strengthsTable, weaknessTable };
