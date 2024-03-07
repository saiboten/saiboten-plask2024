function usePikachuDetails() {
  return [
    { name: "pikachu", attack: 50, hp: 100 } as Pokemon,
    { type: "lightning", weakness: "rock" },
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

interface Pokemon {
  name: string;
  hp: number;
  attack: number | (() => number);
}
