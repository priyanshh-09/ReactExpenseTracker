import { useState } from "react";


export default function Expenseform({setExpenses}) {
  //Using unidirectional data flow with 3 separate state
  //  const[title, setTitle] = useState('');
  //  const[category, setCategory] = useState('');
  //  const[amount, setAmount] = useState("");

  //By Using only single state
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setExpenses((prevState) => [
      ...prevState,
       {...expense, id: crypto.randomUUID()}
      ])

    setExpense({
      title: "",
      category: "",
      amount: "",
    });  
      

    //Using unidirectional data flow with 3 separate state
    // const expense = {title,category,amount, id: crypto.randomUUID()};
    // setExpenses((prevState)=> [...prevState, expense])

    // setTitle('');
    // setCategory('');
    // setAmount('');

    // Using Form Constructor
    // setExpenses((prevState) => [
    // ... prevState,
    // {...getFormData(e.target), id: crypto.randomUUID}])
    // e.target.reset();
  };

  //Using unidirectional data flow with 3 separate state
  // const getFormData = (form)=>{
  //       const Formdata = new FormData(form);
  //       const data = {};

  //       for (const [key, value] of Formdata.entries()) {
  //         data[key] = value;
  //       }

  //      return data;
  // }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlfor="title">Title</label>

        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={(e) => setExpense((prevState) => ({...prevState, title: e.target.value}))}
        />
      </div>

      <div className="input-container">
        <label htmlfor="category">Category</label>

        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={(e) => setExpense((prevState)=> ({...prevState,  category: e.target.value}))}
        >
          <option hidden>Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlfor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={(e) => setExpense((prevState)=> ({...prevState, amount: e.target.value}))}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
