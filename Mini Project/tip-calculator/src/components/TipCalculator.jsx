import { useState } from "react";

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  // calculattion part 
  const tipAmount = (Number(bill) * Number(tipPercentage)) / 100 ;
  const totalAmount = tipAmount + Number(bill);
  
  function resetBtn(){
    setBill(0);
    setTipPercentage(0)
  }

  return (
    <div>
      <h1>Tip calculator</h1>
      <div>
        <h3>Bil Amount:</h3>
        <input type="number"
         value={bill}
         onChange={(e)=>setBill(e.target.value)}/>
      </div>

      <div>
        <h3>Tip Percentage</h3>
        <input type="number"
        value={tipPercentage}
        onChange={(e)=>setTipPercentage(e.target.value)} />
      </div>

      <div>
        <h3>Tip amount</h3>
        <p>₹{tipAmount}</p>
        <h3>Total Amount</h3>
        <p>₹{totalAmount}</p>
      </div>
      <button onClick={resetBtn}>Reset</button>
    </div>
  );
}
export default TipCalculator;
