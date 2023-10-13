import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const LengthtField = ({ length, handleChange }) => {
  return (
    <div className="length">
      <h2 className="message">Character length {length}</h2>
      <Slider min={5} max={50} value={length} onChange={handleChange} />
    </div>
  );
};
