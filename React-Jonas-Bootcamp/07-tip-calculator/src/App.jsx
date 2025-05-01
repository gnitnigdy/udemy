import { useState } from "react";
import BillInput from "./BillInput";
import ServiceSelection from "./ServiceSelection";
import Summary from "./Summary";

export default function App() {
  const [billAmount, setBillAmount] = useState("");
  function handleBill(paramBill) {
    setBillAmount(paramBill);
    console.log(`ini Bill`);
    console.log(billAmount);
  }

  const [tipSelf, setTipSelf] = useState(0);
  const [tipFriend, setTipFriend] = useState(0);

  function handleTipSelf(param) {
    setTipSelf(param);
    console.log(tipSelf);
  }

  function handleTipFriend(param) {
    setTipFriend(param);
    console.log(tipFriend);
  }

  // const [tip, setTip] = useState([0]);
  // function handleTip(param) {
  //   setTip((prev) => [...prev, Number(param)]);
  // }

  function handleReset() {
    setBillAmount("");
    setTipSelf(0);
    setTipFriend(0);
  }
  return (
    <div>
      <h1>Hello World</h1>
      <BillInput amount={billAmount} onBillFilling={handleBill}></BillInput>
      <ServiceSelection tipValue={tipSelf} onHandleTip={handleTipSelf}>
        How did you like the service?
      </ServiceSelection>
      <ServiceSelection tipValue={tipFriend} onHandleTip={handleTipFriend}>
        How did your friend like the service?
      </ServiceSelection>
      {/* <Summary amount={billAmount} tipSelf={tipSelf} tipFriend={tipFriend} /> */}
      {billAmount > 0 && (
        <Summary
          amount={billAmount}
          tipSelf={tipSelf}
          tipFriend={tipFriend}
          onResetItem={handleReset}
        />
      )}
    </div>
  );
}
