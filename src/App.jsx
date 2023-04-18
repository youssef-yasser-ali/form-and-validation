import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput/FormInput";
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage:
        "user name should be 3-16 characters shouldn't include any special Character !",
      label: "User Name",
      require: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "it's not vaild",
      label: "Email",
      require: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "BirthDay",
      errorMessage: "",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      pattern:
        "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$",
      errorMessage:
        "password should be 8-20 charcters Upper & Lower and include at least , 1 number and 1 special character!",
      label: "Password",
      require: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      pattern: values.password,
      errorMessage: "Passowrd don't match",
      label: "Confirm Password",
      require: true,
    },
  ];

  // Hanedl events

  const onchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  // inputs Rendered
  const inputsRen = inputs.map((input) => {
    return (
      <FormInput
        key={input.id}
        {...input}
        value={values[input.name]}
        changed={onchange}
      />
    );
  });

  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
        <h1>Register</h1>
        {inputsRen}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
