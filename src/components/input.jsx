const Input = ({ id, type, label, placeholder, icon, ...rest }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}

      <input
        id={id}
        type={type}
        placeholder={placeholder || `Enter your ${type}...`}
        {...rest}
      />

      {icon && <span className="material-symbols-rounded icon">{icon}</span>}
    </div>
  );
};

export default Input;
