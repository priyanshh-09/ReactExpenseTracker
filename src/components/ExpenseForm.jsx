import { useState } from "react";
import Input from "./Input";
import Select from "./Select";


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
    email:"",
  });

  const[errors,setErrors] = useState({});
  
  const validationConfig = {
    title: [
      { required: true, message: "Please Enter a Title !!" },
      { minLength: 5, message: "Title should be atleast 5 char long !!" },
          ],
    category: [{ required: true, message: "Please Select Category !!" }],
    amount: [{ required: true, message: "Please Enter an Amount !!" },
      {chars: true, message: 'Amount must be in "Numbers" '}
    ],
    email: [
      { required: true, message: "Please Enter an Email !!" },
      // eslint-disable-next-line no-useless-escape
      { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message:'Please Enter "Valid" email'},
           ],
  };

  const validate = (formData)=>{
     const errorsData = {};
     

     Object.entries(formData).forEach(([key , value])=>{   
      // console.log(validationConfig[key]);/
         
        validationConfig[key].some((rule)=>{
          
              if(rule.required && !value){
                errorsData[key] = rule.message;;
                return true;
              }

              if (rule.minLength && value.length < 5) {
                errorsData[key] = rule.message;
                return true;
              }

              if(rule.pattern && !rule.pattern.test(value)){
                 errorsData[key] = rule.message;
                 return true;
              }

               if (rule.chars && !/^-?\d+$/.test(value)) {
                 errorsData[key] = rule.message;
                 return true;
               }
        })
     })

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

      <Input
        label="Email"
        id={"email"}
        name={"email"}
        value={expense.email}
        onchange={handleChange}
        error={errors.email}
      />

      <Input
        label="Title"
        id={"title"}
        name={"title"}
        value={expense.title}
        onchange={handleChange}
        error={errors.title}
      />

      <Select
        label="Category"
        id={"category"}
        name={"category"}
        value={expense.category}
        onchange={handleChange}
        error={errors.category}
        defaultOption="Select Category"
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
      />

      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onchange={handleChange}
        error={errors.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}
