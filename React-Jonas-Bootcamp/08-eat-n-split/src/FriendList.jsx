import Friend from "./components/Friend";

export default function FriendList({ data, selected, onSetSplitBill }) {
  return (
    <ul>
      {data.map((item) => {
        return (
          <Friend
            key={item.id}
            img={item.image}
            idFriend={item.id}
            friendName={item.name}
            balance={item.balance}
            selected={selected}
            onSetSplitBill={onSetSplitBill}
          />
        );
      })}
    </ul>
  );
}
