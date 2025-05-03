import ComponentButton from "./ComponentButton";

export default function Friend({
  img,
  idFriend,
  selected,
  friendName,
  balance,
  onSetSplitBill,
}) {
  const isSelected = selected?.id === idFriend;
  console.log(selected);
  return (
    <ul>
      <li className={isSelected ? "selected" : ""}>
        <img src={img}></img>
        <h3>{friendName}</h3>
        <p className={balance > 0 ? "green" : balance < 0 ? "red" : ""}>
          {balance < 0
            ? `You owe ${friendName} ${Math.abs(balance)}€`
            : balance > 0
            ? `${friendName} owe you ${Math.abs(balance)}€`
            : `You and ${friendName} are even`}
        </p>
        <ComponentButton
          styleClass={"button"}
          buttonAction={() =>
            onSetSplitBill({ id: idFriend, name: friendName, balance: balance })
          }
        >
          {isSelected ? "Close" : "Select"}
        </ComponentButton>
      </li>
    </ul>
  );
}
