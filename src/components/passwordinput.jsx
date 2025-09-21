import { useState } from "react";

export default function PasswordInput({
  label,
  id,
  name,
  value,
  onChange,
  required,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label} {required && <span className="required">*</span>}
      </label>
      <div className="password-wrapper">
        <input
          type={show ? "text" : "password"}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
        <span
          className="toggle-icon"
          onClick={() => setShow(!show)}
          style={{ cursor: "pointer" }}
        >
          {show ? "🙈" : "👁️"}
        </span>
      </div>
    </div>
  );
}
