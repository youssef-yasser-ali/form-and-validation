import React, { useState } from "react";
import "./formInput.css";
function Form(props) {
  const [focused, setFocused] = useState(false);
  const { label, changed, id, errorMessage, require, ...inputProps } = props;

  const handelFocus = (e) => {
    setFocused(true);
  };
  //
  return (
    <div className="formInput">
      <label htmlFor="">{label} : </label>
      <input
        {...inputProps}
        onChange={changed}
        required={require}
        onBlur={handelFocus}
        focused={focused.toString()}
      />
      <span className="errorMessage">{errorMessage}</span>
    </div>
  );
}

export default Form;
