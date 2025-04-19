import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  const nextButton = () => {
    step < 3 ? setStep((prevNumber) => parseInt(prevNumber) + 1) : step;
  };

  const prevButton = () => {
    step > 1 ? setStep((prevNumber) => parseInt(prevNumber) - 1) : 1;
  };

  return (
    <>
      <div className="steps">Hello React</div>
      <div className="numbers">
        <div className={`${step === 1 ? "active" : ""}`}>1</div>
        <div className={`${step === 2 ? "active" : ""}`}>2</div>
        <div className={`${step === 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={prevButton}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={nextButton}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
