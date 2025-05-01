import { useState } from "react";
import PackingItem from "./PackingItem";
export default function PackingList({
  props,
  onDeleteItem,
  onPackedItem,
  onClearItem,
}) {
  const dataProps = [...props];
  console.log("ini data props: ", dataProps);

  const [sortBy, setSortBy] = useState("input");

  let dataItemSorted;
  console.log("ini data item sorted");
  console.log(dataItemSorted);

  if (sortBy === "input") {
    dataItemSorted = dataProps;
  } else if (sortBy === "description") {
    dataItemSorted = dataProps
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    dataItemSorted = dataProps
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  function handleSortBy(param) {
    setSortBy(param);
  }
  function handleClearList() {
    onClearItem();
  }
  return (
    <div className="list">
      <ul>
        {dataItemSorted.map((data) => {
          return (
            <PackingItem
              key={data.id}
              itemName={data.description}
              itemId={data.id}
              itemQuantity={data.quantity}
              itemIsPacked={data.packed}
              onDeleteItem={onDeleteItem}
              onPackedItem={onPackedItem}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select
          name="cmbOrderSort"
          id="cmbOrderSort"
          value={sortBy}
          onChange={(e) => handleSortBy(e.target.value)}
        >
          <option value={"input"}>Sort by input order</option>
          <option value={"description"}>Sort by description</option>
          <option value={"packed"}>Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}
