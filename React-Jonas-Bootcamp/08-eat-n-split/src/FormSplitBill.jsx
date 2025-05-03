import { useState } from "react";
import ComponentButton from "./components/ComponentButton";

export default function FormSplitBill({ idForm, onSplitBillTransaction }) {
  const [bill, setBill] = useState("");
  const [selfExpense, setSelfExpense] = useState("");
  const [payer, setPayer] = useState("user");
  let friendExpense = Number(bill) - Number(selfExpense);

  function handleSplitBillTransaction(e) {
    e.preventDefault();
    if (!bill || !payer) return;
    let tempNewSplitBill = {
      id: idForm.id,
      payer: payer,
      balance:
        payer === "user"
          ? Math.abs(Number(bill) - Number(selfExpense))
          : Number(`-${selfExpense}`),
    };
    console.log("ini temp split bill");
    console.log(tempNewSplitBill);
    onSplitBillTransaction(tempNewSplitBill);
  }

  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => handleSplitBillTransaction(e)}
    >
      <h2>Split a bill with {idForm.name}</h2>
      <label>💵Bill Value</label>
      <input
        type="number"
        placeholder="0"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <label>👨Your expense</label>
      <input
        type="number"
        placeholder="0"
        value={selfExpense}
        onChange={(e) =>
          setSelfExpense(
            Number(e.target.value) > Number(bill)
              ? Number(selfExpense)
              : Number(e.target.value)
          )
        }
      />
      <label>👩{`${idForm.name}'s`} expense</label>
      <input type="number" placeholder="0" value={friendExpense} disabled />
      <label>💰Who is paying the bill?</label>
      <select
        name="payerSelection"
        id="payerSelection"
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
      >
        <option value={"user"}>You</option>
        <option value={"friend"}>{idForm.name}</option>
      </select>
      <ComponentButton styleClass={"button"}>Split Bill</ComponentButton>
    </form>
  );
}
