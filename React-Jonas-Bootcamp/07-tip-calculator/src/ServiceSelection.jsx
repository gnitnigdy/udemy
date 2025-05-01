export default function ServiceSelection({ tipValue, onHandleTip, children }) {
  return (
    <div>
      <p>{children}</p>
      <select
        value={tipValue}
        onChange={(e) => onHandleTip(Number(e.target.value))}
      >
        <option value="0">It was terible! (0%)</option>
        <option value="10">It was good! (10%)</option>
        <option value="20">It was amazing (20%)</option>
      </select>
    </div>
  );
}
