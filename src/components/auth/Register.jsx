import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContextProvider";
import "./Auth.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  const { handleRegister, loading, error } = useAuth();

  function handleSave() {
    if (
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !userName.trim()
    ) {
      alert("заполните поля!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", passwordConfirm);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("username", userName);
    handleRegister(formData);
  }

  return (
    <div className="Auth">
      <p>SIGN UP FORM</p>
      <div className="auth__inputs-div">
        <input
          name="email"
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          name="firstName"
          value={firstName}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="first name"
        />
        <input
          name="lastName"
          value={lastName}
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="last name"
        />

        <input
          name="password"
          value={password}
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          name="passwordConfirm"
          value={passwordConfirm}
          type="text"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="confirm password"
        />
        <input
          name="userName"
          value={userName}
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="User Name"
        />
      </div>
      <div className="auth__buttons-div">
        {loading ? (
          <Button className="btn-danger" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        ) : (
          <Button className="btn-danger" onClick={handleSave}>
            REGISTER
          </Button>
        )}
      </div>
    </div>
  );
};

export default Register;
