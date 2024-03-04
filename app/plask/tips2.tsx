// Nye krav:
// id
// disabled

type Props = {
  onClick: () => void;
};

export function ButtonUser() {
  const handleClick = () => console.log("knapp trykket");
  return <HeiKnapp onClick={handleClick} />;
}

function HeiKnapp({ onClick }: Props) {
  return <button onClick={onClick}>Hei</button>;
}
