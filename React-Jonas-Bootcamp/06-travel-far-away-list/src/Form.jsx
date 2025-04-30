import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  console.log("ini set item");
  console.log(onAddItem);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  const selectionValue = Array.from({ length: 20 }, (_, i) => i + 1);
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {selectionValue.map((num) => {
          return (
            <option key={num} value={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        value={description}
        placeholder="Place your need here..."
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add Items</button>
    </form>
  );
}
