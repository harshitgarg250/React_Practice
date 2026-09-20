function ExpenseItem({ id, name, amount, onDelete }) {
  return (
    <div className="expense-item">
      <div>
        <h3>{name}</h3>
        <p>₹{amount}</p>
      </div>

      <button onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;