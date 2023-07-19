import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading } = useAuth();

  function handleSave() {
    if (!email.trim() || !password.trim()) {
      alert("заполните поля!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email);
  }

  return (
    <div className="Auth">
      <p>SIGN IN FORM</p>
      <div className="auth__inputs-div">
        <input
          name="email"
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          name="password"
          value={password}
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
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
            LOGIN
          </Button>
        )}
        <Button
          className="btn-danger"
          onClick={() => navigate("/password-reset")}
        >
          Забыли пароль?
        </Button>
      </div>
    </div>
  );
};

export default Login;
