import { useState } from "react";

function Calendar() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  // const [dateNow, setDateNow] = useState(
  //   new Date("June 21 2027").getDate() + count
  // );

  const stepMinus = () => {
    setStep((num) => num - 1);
  };

  const stepPlus = () => {
    setStep((num) => num + 1);
  };

  const countMinus = () => {
    setCount((num) => num - step);
  };

  const countPlus = () => {
    setCount((num) => num + step);
    //setDateNow((prev) => prev + count);
  };

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={stepMinus}>-</button>
        <span>Step : {step}</span>
        <button onClick={stepPlus}>+</button>
      </div>
      <div>
        <button onClick={countMinus}>-</button>
        <span>Count : {count}</span>
        <button onClick={countPlus}>+</button>
      </div>
      <p>
        {`${count} day from today`} is {date.toDateString()}
      </p>
    </div>
  );
}

export default Calendar;
