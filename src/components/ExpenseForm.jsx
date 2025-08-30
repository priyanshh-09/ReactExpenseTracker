

export default function Expenseform() {
  return (
    <htmlform className="expense-htmlform">
      <div className="input-container">
        <label htmlfor="title">Title</label>
        <input id="title" />
      </div>
      <div className="input-container">
        <label htmlfor="category">Category</label>
        <input id="category" />
      </div>
      <div className="input-container">
        <label htmlfor="amount">Amount</label>
        <input id="amount" />
      </div>
      <button className="add-btn">Add</button>
    </htmlform>
 
  );
}
