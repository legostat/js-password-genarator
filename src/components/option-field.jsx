export const OptionField = ({ title, isChecked, handleChange }) => {
  return (
    <label className="option">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="checkmark"></span>
      <span className="option-title">{title}</span>
    </label>
  );
};
