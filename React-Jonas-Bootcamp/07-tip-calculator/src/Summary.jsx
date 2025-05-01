export default function Summary({ amount, tipSelf, tipFriend, onResetItem }) {
  let totalTip = ((Number(tipSelf) + Number(tipFriend)) / 2 / 100) * amount;
  let totalAmount = Number(amount) + totalTip;
  return (
    <>
      {amount !== "" ? (
        <>
          <p>
            You pay ${totalAmount} (${amount} + ${totalTip} for tip)
          </p>
          <button onClick={onResetItem}>Reset</button>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
