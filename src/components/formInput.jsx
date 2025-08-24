export default function FormInput({ label, type, id, name, required }) {
  return (
    <>
      <label htmlFor={id}>
        {label} {required && <span className="required">*</span>}
      </label>
      <input type={type} id={id} name={name} required={required} />
    </>
  );
}
