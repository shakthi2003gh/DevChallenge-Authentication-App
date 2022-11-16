const Input = ({ id, type = "text", label, placeholder, icon, ...rest }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={id}>{label}</label>}

      <input
        id={id}
        type={type}
        placeholder={placeholder || `Enter your ${label}...`}
        {...rest}
      />

      {icon && <span className="material-symbols-rounded icon">{icon}</span>}
    </div>
  );
};

export default Input;
