export default function PackingItem({
  itemName,
  itemQuantity,
  itemId,
  itemIsPacked,
  onDeleteItem,
  onPackedItem,
}) {
  function handleDeleteItem(id) {
    onDeleteItem(id);
  }

  function handlePackedItem(id) {
    onPackedItem(id);
  }

  return (
    <li>
      <input
        type="checkbox"
        value={itemIsPacked}
        onChange={() => handlePackedItem(itemId)}
      />
      <span style={itemIsPacked ? { textDecoration: "line-through" } : {}}>
        {itemQuantity} {itemName}
      </span>
      <button onClick={() => handleDeleteItem(itemId)}>❌</button>
    </li>
  );
}
