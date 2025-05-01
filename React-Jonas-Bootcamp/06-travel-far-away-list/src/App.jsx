import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 15, packed: true },
// ];

export default function App() {
  const [initialItems2, setInitialItems2] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 15, packed: false },
  ]);

  function handleAddItem(item) {
    setInitialItems2((prev) => [...prev, item]);
    console.log(initialItems2);
  }

  function handleDeleteItem(id) {
    console.log("ini id");
    console.log(id);
    setInitialItems2((prev) => prev.filter((prevItem) => prevItem.id !== id));
  }

  function handlePackedItem(id) {
    console.log("ini id untuk update");
    console.log(id);
    setInitialItems2((prev) =>
      prev.map((prevItem) =>
        prevItem.id === id
          ? { ...prevItem, packed: !prevItem.packed }
          : prevItem
      )
    );
  }

  function handleClearList() {
    const confirmation = window.confirm("Are you sure want to clear the list?");
    confirmation ? setInitialItems2([]) : "";
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />

      <PackingList
        props={initialItems2}
        onDeleteItem={handleDeleteItem}
        onPackedItem={handlePackedItem}
        onClearItem={handleClearList}
      />
      <Stats props={initialItems2} />
    </div>
  );
}

//export default App;
