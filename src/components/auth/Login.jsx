import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import "./Auth.css"

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
    <Container className="w-25">
      <Form.Control
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <Form.Control
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      {loading ? (
        <Button  className="btn-danger"
         disabled>
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
        <Button className="btn-danger"
         onClick={handleSave}>
          LOGIN
        </Button>
      )}
      <Button className="btn-danger"
        style={{ marginLeft: "30%" }}
        onClick={() => navigate("/password-reset")}
      >
        Забыли пароль?
      </Button>
    </Container>
  );
};

export default Login;
