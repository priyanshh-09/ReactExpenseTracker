

export default function Input({onchange,name, id, value, label, error}) {
  return (
    <div className="input-container">
      <label htmlfor={id}>{label}</label>

      <input
        id={id}
        name={name}
        value={value}
        onChange={onchange}
        // ref={titleRef}
      />
      <p className="error">{error}</p>
    </div>
  );
}

