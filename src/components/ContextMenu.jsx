
export default function ContextMenu({menuPosition, setMenuPosition, setExpenses, rowid}) {
  if(!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div onClick={()=>{
         setMenuPosition({})
      }}>Edit</div>

      <div onClick={()=>{
        setExpenses((prevState)=> 
        prevState.filter((expense) => expense.id !== rowid)
        )
         setMenuPosition({});
      }}>Delete</div>
    </div>
  );
}
