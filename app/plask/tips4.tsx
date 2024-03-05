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

function useTypes() {
  return [
    { name: "water", weakness: "grass" },
    { name: "grass", weakness: "fire" },
  ];
}

function WeaknessTable() {
  const [water, grass, fire] = useTypes();

  return (
    <ul>
      <li>
        {water.name} - {water.weakness}
      </li>
      <li>
        {grass.name} - {grass.weakness}
      </li>
      {fire.name} - {fire.weakness}
    </ul>
  );
}
