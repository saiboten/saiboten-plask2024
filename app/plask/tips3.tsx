type AddPokemon = {
  name: string;
  hp: number;
  attack: number;
};

function addPokemon(pokemon: AddPokemon) {}

type Pokemon = {
  id: number;
  name: string;
  hp: number;
  attack: number;
};

const newPokemon: AddPokemon = {
  attack: 50,
  hp: 100,
  name: "Weedle",
};

addPokemon(newPokemon);
