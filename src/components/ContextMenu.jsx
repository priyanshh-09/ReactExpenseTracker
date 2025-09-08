
export default function ContextMenu({menuPosition, setMenuPosition, setExpense, setExpenses, rowid, expenses, setEditingRowId}) {
  if(!menuPosition.left) return;

  return (
    <div className="context-menu" style={menuPosition}>
      <div 
      onClick={()=>{
           const foundData = expenses.find((expense)=> expense.id === rowid);
           setEditingRowId(rowid)
           setExpense({
              email: 'priyanshuchandola9@gmail.com',
              title:  foundData.title,
              category: foundData.category,
              amount: foundData.amount
           })
           setMenuPosition({});
      }}>Edit</div>

      <div 
      onClick={()=>{
        setExpenses((prevState)=> 
        prevState.filter((expense) => expense.id !== rowid)
        )
        setMenuPosition({});
      }}>Delete</div>
    </div>
  );
}
