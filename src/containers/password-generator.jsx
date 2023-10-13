import { useState, useReducer } from "react";
import { generatePassword } from "@app/utils/generate-password";
import { reducer, initialState, actionTypes } from "@app/utils/reducer";

import { DisplayField } from "@app/components/display-field";
import { OptionField } from "@app/components/option-field";
import { LengthtField } from "@app/components/length-field";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleGenerate = (e) => {
    e.preventDefault();
    setPassword(generatePassword(state));
  };

  const setPasswordLength = (value) => {
    dispatch({
      type: actionTypes.SET_LENGTH,
      payload: value,
    });
  };

  return (
    <section className="pg-container">
      <h1 className="pg-title">Password Generator</h1>
      <form className="pg-form">
        <DisplayField password={password} />
        <LengthtField length={state.length} handleChange={setPasswordLength} />
        <div className="pg-options">
          <OptionField
            title="Include Lowercase"
            isChecked={state.lowercase}
            handleChange={() => {
              dispatch({ type: actionTypes.SET_LOWERCASE });
            }}
          />
          <OptionField
            title="Include Uppercase"
            isChecked={state.uppercase}
            handleChange={() => {
              dispatch({ type: actionTypes.SET_UPPERCASE });
            }}
          />
          <OptionField
            title="Include Numbers"
            isChecked={state.numbers}
            handleChange={() => {
              dispatch({ type: actionTypes.SET_NUMBERS });
            }}
          />
          <OptionField
            title="Include Symbols"
            isChecked={state.symbols}
            handleChange={() => {
              dispatch({ type: actionTypes.SET_SYMBOLS });
            }}
          />
        </div>
        <div>
          <button onClick={handleGenerate} className="generate-btn">
            Generate
          </button>
        </div>
      </form>
    </section>
  );
};
