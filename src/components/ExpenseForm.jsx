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

  const[errors,setErrors] = useState({});


  const validate = (formData)=>{
     const errorsData = {};

      if(!formData.title){
        errorsData.title = 'Title is required';
      }

      if(!formData.category) {
        errorsData.category = "Category is required";
      }

      if(!formData.amount) {
        errorsData.amount = "Amount is required";
      }

      setErrors(errorsData);
      return errorsData;
  }


  // By using UseRef hook
  // const titleRef = useRef(null);
  // const categoryRef = useRef(null);
  // const amountRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // By using UseRef hook
    // setExpenses((prevState)=> [
    //   ...prevState,{
    //     title:titleRef.current.value,
    //     category: categoryRef.current.value,
    //     amount:amountRef.current.value,
    //     id: crypto.randomUUID()
    //   }
    // ])
       
   const validateResult = validate(expense)

    if(Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

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
  

  const handleChange = (e)=>{
    const {name,value} = e.target;
   setExpense((prevState) => ({
    ...prevState, 
     [name]: value,
    }))
    setErrors({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlfor="title">Title</label>

        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={handleChange}
          // ref={titleRef}
        />
        <p className="error">{errors.title}</p>
      </div>

      <div className="input-container">
        <label htmlfor="category">Category</label>

        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          // ref={categoryRef}
        >
          <option hidden>Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className="error">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlfor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          // ref={amountRef}
        />
        <p className="error">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
