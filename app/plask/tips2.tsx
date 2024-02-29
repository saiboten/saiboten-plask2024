// Nye krav:
// id
// disabled

type Props = {
  children: string;
  onClick: () => void;
  disabled?: boolean;
};

export function ButtonUser() {
  const handleClick = () => console.log("knapp trykket");
  return <SubmitButton onClick={handleClick}>Hei</SubmitButton>;
}

function SubmitButton({ onClick, children, disabled }: Props) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
