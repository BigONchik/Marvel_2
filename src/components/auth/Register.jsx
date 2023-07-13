import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContextProvider";

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
    <Container className="w-50">
      {error ? <h2>{error}</h2> : null}
      <Form.Control
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <Form.Control
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <Form.Control
        onChange={(e) => setPasswordConfirm(e.target.value)}
        placeholder="confirm password"
      />
      <Form.Control
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="first name"
      />
      <Form.Control
        onChange={(e) => setLastName(e.target.value)}
        placeholder="last name"
      />
      <Form.Control
        onChange={(e) => setUserName(e.target.value)}
        placeholder="user name"
      />

      {loading ? (
        <Button variant="primary" disabled>
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
        <Button onClick={handleSave}>REGISTER</Button>
      )}
    </Container>
  );
};

export default Register;
