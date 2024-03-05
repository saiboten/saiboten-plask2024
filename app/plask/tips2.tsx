import { ComponentProps } from "react";

// Nye krav:
// id
// disabled

type Props = {
  onClick: ComponentProps<"button">["onClick"];
};

export function Page() {
  const handleClick: ComponentProps<"button">["onClick"] = (e) => {
    console.log("knapp trykket");
  };

  return (
    <div>
      <HeiKnapp onClick={handleClick} />
    </div>
  );
}

function HeiKnapp({ onClick }: Props) {
  return <button onClick={onClick}>Hei</button>;
}
