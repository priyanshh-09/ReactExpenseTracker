import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
   
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm />
          <ExpenseTable />
        </div>
      </main>
  
  );
}

export default App
