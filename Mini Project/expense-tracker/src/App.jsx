import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  function handleDeleteExpense(id) {
    setExpenses(
      expenses.filter((expense) => expense.id !== id)
    );
  }

  function handleReset() {
    setExpenses([]);
  }

  const totalExpense = expenses.reduce((total, expense) => {
    return total + Number(expense.amount);
  }, 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <ExpenseForm onAddExpense={handleAddExpense} />

      <ExpenseList
        expenses={expenses}
        onDelete={handleDeleteExpense}
      />

      <div className="total">
        <h2>Total Expense: ₹{totalExpense}</h2>
      </div>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;