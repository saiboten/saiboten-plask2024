function usePikachuDetails() {
  return [
    { name: "pikachu", attack: 50, hp: 100 } as PokemonDetails,
    { type: "lightning", weakness: "rock" } as Type,
  ] as const;
}

export function PikachuProfile() {
  const [pokemon, type] = usePikachuDetails();

  return (
    <div>
      <h1>
        {pokemon.name}: HP: {pokemon.hp} Attack: {pokemon.attack}
      </h1>
      <div>Weakness: {type.weakness} </div>
    </div>
  );
}

interface PokemonDetails {
  name: string;
  attack: number | (() => number);
  hp: number;
}

interface Type {
  type: "lightning" | "grass";
  weakness: string;
}
