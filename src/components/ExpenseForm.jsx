

export default function Expenseform({setExpenses}) {
    const handleSubmit = (e)=>{
      e.preventDefault()
      setExpenses((prevState) => [
        ... prevState, 
        {...getFormData(e.target), id: crypto.randomUUID}]) }

    const getFormData = (form)=>{
          const Formdata = new FormData(form);
          const data = {};

          for (const [key, value] of Formdata.entries()) {
            data[key] = value;
          }

         return data;
    }

  return (

    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlfor="title">Title</label>
        <input id="title"  name="title"/>
      </div>

      <div className="input-container">

        <label htmlfor="category">Category</label>

        <select id="category" name="category">
          <option hidden>Select Category</option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlfor="amount">Amount</label>
        <input id="amount" name="amount"/>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
