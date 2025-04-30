export default function Stats({ props }) {
  const dataItem = [...props];
  console.log("ini data item stats");
  console.log(dataItem);

  const thingsPacked = dataItem.filter((item) => item.packed === true);
  console.log("ini things packed");
  console.log(thingsPacked);

  const percentagePacked = Math.floor(
    Number(thingsPacked.length / dataItem.length) * 100
  );

  return (
    <footer className="stats">
      {percentagePacked !== 100 ? (
        <em>
          You have {dataItem.length} items on your list, and you already packed{" "}
          {thingsPacked.length} ({percentagePacked}%)
        </em>
      ) : (
        <em>Your items fully packed!</em>
      )}
    </footer>
  );
}
