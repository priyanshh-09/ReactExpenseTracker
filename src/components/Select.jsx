

export default function Select({ onchange, name, id, value, label, error, options, defaultOption }) {
  return (
    <div className="input-container">
      <label htmlfor={id}>{label}</label>

      <select
        id={id}
        name={name}
        value={value}
        onChange={onchange}
        // ref={categoryRef}
      >
        {defaultOption
         && <option hidden>{defaultOption}</option>
        }

        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}
