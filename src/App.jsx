import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import expenseData from './components/expenseData';
import { useState } from 'react';
import './App.css'

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  // console.log(expenses);
  

  return (
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses}/>
          <ExpenseTable expenses={expenses} setExpenses={setExpenses}/>
        </div>
      </main>
  
  );
}

export default App
