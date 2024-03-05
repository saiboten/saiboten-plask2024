// Nye krav:
// id
// disabled

type Props = {
  onClick: () => void;
};

export function Page() {
  const handleClick = () => console.log("knapp trykket");
  return (
    <div>
      <HeiKnapp onClick={handleClick} />
    </div>
  );
}

function HeiKnapp({ onClick }: Props) {
  return <button onClick={onClick}>Hei</button>;
}
