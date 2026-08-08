import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="headline">Date Counter</h1>
      <Steps />
    </>
  );
}

export default App;

function Steps() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  let date = new Date("21 june 2028");
  date.setDate(date.getDate() + count);
  return (
    <div className="container">
      <div className="counter">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>

      <h1>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} Day from today `
              : `${Math.abs(count)} days ago was `}
        </span>
        {date.toDateString()}
      </h1>
    </div>
  );
}
