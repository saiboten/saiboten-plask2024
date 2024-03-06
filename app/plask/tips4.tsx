import Image from "next/image";
import Link from "next/link";

const routes = {
  overview: "/overview",
  arena: "/arena",
};

function Menu() {
  return (
    <ul>
      <Link href={routes.arena}>Kamparena</Link>
      <Link href={routes.overview}>Oversikt</Link>
    </ul>
  );
}

// --------------------------------------------

type Routes = (typeof routes)[keyof typeof routes];

function navigate(path: Routes) {
  window.location.href = path;
}

navigate(""); // ?

// --------------------------------------------

function usePikachuDetails() {
  return [
    { name: "pikachu", attack: 50, hp: 100 },
    { type: "lightning", weakness: "rock" },
  ];
}

export function PikachuProfile() {
  const [pokemon, type, image] = usePikachuDetails();

  return (
    <div>
      <h1>
        {pokemon.name}: HP: {pokemon.hp} Attack: {pokemon.attack}
      </h1>
      <div>Weakness: {type.weakness} </div>
      <Image alt={image.name ?? ""} src={image.name ?? ""} />
    </div>
  );
}
