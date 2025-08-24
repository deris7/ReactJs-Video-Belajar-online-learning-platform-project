import { useState } from "react";

export default function PasswordInput({ label, id, name }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <label htmlFor={id}>
        {label} <span className="required">*</span>
      </label>
      <div className="password-wrapper">
        <input type={show ? "text" : "password"} id={id} name={name} required />
        <span
          className="toggle-icon"
          onClick={() => setShow(!show)}
          style={{ cursor: "pointer" }}
        >
          {show ? "🙈" : "👁️"}
        </span>
      </div>
    </>
  );
}
