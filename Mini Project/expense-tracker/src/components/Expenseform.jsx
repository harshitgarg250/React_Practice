import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!expenseName || !amount) {
      setError("Please enter expense name and amount");
      return;
    }

    if (Number(amount) <= 0) {
      setError("Amount must be greater than 0");
      return;
    }

    const newExpense = {
      id: Date.now(),
      name: expenseName,
      amount: amount,
    };

    onAddExpense(newExpense);

    setExpenseName("");
    setAmount("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div>
        <label>Expense Name</label>

        <input
          type="text"
          placeholder="e.g. Food"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </div>

      <div>
        <label>Amount</label>

        <input
          type="number"
          placeholder="e.g. 500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;