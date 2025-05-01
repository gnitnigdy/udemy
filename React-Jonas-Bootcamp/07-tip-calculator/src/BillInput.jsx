export default function BillInput({ amount, onBillFilling }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="text"
        value={amount}
        onChange={(e) => onBillFilling(e.target.value)}
      />
    </div>
  );
}
