import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <>
      <BillAmount bill={bill} onSetBill={setBill} />
      <ServiceTip
        text="How Did you like the Service ?"
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      />
      <ServiceTip
        text="How Did your friend like the Service ?"
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      />
      <Output bill={bill} tip={tip} />
      <Reset onReset={handleReset} />
    </>
  );
}

function BillAmount({ bill, onSetBill }) {
  return (
    <div className="bill-amount">
      <h2>How Much is the bill ?</h2>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function ServiceTip({ text, percentage, onSetPercentage }) {
  return (
    <div className="service">
      <h2>{text}</h2>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div className="billReceipt">
      <h1>
        {`Your Bill ${bill} | Your Tip ${tip} : Total Bill : ${bill + tip}`}
      </h1>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;
