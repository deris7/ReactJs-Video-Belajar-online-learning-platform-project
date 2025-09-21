export default function FormInput({
  label,
  type,
  id,
  name,
  value,
  onChange,
  required,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label} {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
