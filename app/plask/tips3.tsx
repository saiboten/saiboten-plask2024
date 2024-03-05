type AddPokemon = {
  name: string;
  hp: number;
  attack: number;
};

function addPokemon(pokemon: AddPokemon) {
  // Add pokemon
}

const newPokemon: AddPokemon = {
  attack: 50,
  hp: 100,
  name: "Weedle",
};

type Pokemon = {
  id: number;
  name: string;
  hp: number;
  attack: number;
};

addPokemon(newPokemon);

// Omit<Type, Keys>
// Pick<Type, Keys> - Motsatte av Omit

// Exclude<UnionType, ExcludedMembers>  // Omit for unions
// Extract<Type, Union>                 // Pick for unions

// Partial<Type>
// Required<Type>
// Readonly<Type>
// NonNullable<Type>
// Parameters<Type>
// ReturnType<Type>

// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>
