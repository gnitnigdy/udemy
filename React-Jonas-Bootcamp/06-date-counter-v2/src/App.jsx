import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const dateNow = new Date("Apr 25 2025");
  dateNow.setDate(dateNow.getDate() + count);

  function handleMinus() {
    setCount((prev) => Number(prev) - Number(step));
  }

  function handlePlus() {
    setCount((prev) => Number(prev) + Number(step));
  }

  function handleReset() {
    setStep(Number(0));
    setCount(Number(0));
  }
  return (
    <div>
      <div>
        <input
          id="rngStep"
          name="rngStep"
          type="range"
          min={0}
          max={10}
          step={1}
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
        <label htmlFor="rngStep">{step}</label>
      </div>
      <button onClick={handleMinus}>-</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={handlePlus}>+</button>
      <p>
        {count === 0
          ? `Today`
          : count < 0
          ? `${count} days ago`
          : `${count} days later`}{" "}
        is {dateNow.toDateString()}
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
