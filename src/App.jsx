import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import expenseData from './components/expenseData';
import { useState } from 'react';
import './App.css'

function App() {

  const [expense, setExpense] = useState({
     title: "",
     category: "",
     amount: "",
     email: "",
  });
  const [expenses, setExpenses] = useState(expenseData);
  // console.log(expenses);
  const[editingrowid, setEditingRowId] = useState('');

  return (
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingrowid={editingrowid} setEditingRowId={setEditingRowId}/>

          <ExpenseTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} setEditingRowId={setEditingRowId}/>
        </div>
      </main>
  
  );
}

export default App
