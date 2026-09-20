import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            amount={expense.amount}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default ExpenseList;