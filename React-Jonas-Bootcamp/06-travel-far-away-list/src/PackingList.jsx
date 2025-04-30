import { useState } from "react";
import PackingItem from "./PackingItem";
export default function PackingList({ props, onDeleteItem, onPackedItem }) {
  const dataProps = [...props];
  console.log("ini data props: ", dataProps);

  const [sortBy, setSortBy] = useState("packed");
  console.log(setSortBy);

  return (
    <div className="list">
      <ul>
        {dataProps.map((data) => {
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
        <select name="cmbOrderSort" id="cmbOrderSort" value={sortBy}>
          <option value={"input"}>Sort by input order</option>
          <option value={"description"}>Sort by description</option>
          <option value={"packed"}>Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}
