import { useState } from "react";
function ExpenseCalculator() {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState(0);
  const [expense, setExpense] = useState([]);

  function handleAddExpense() {
    const newExpense = {
      name: expenseName,
      amount: amount,
    };
    setExpense([...expense, newExpense]);
  }
  const totalExpense = expense.reduce((total, item) => {
    return total + Number(item.amount);
  }, 0);
  function resetBtn(){
    setExpenseName("");
    setAmount(0);
    setExpense([]);
  }
  return (
    <div>
      <h1>Expense Calculator</h1>
      <div>
        <h2>EXpense Name</h2>
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <h3>Amount</h3>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleAddExpense}>Add Expense</button>
        {expense.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>₹{item.amount}</p>
          </div>
        ))}
      </div>

      <div>
        <h3>Total Expense: ₹{totalExpense}</h3>
      </div>
      <button onClick={resetBtn}>Reset</button>
    </div>
  );
}

export default ExpenseCalculator;
