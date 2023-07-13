import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, FormControl, Button } from "react-bootstrap";
import { API } from "../../helpers/consts";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/account/password_reset/`, { email })
      .then((response) => {
        if (response.status === 200) {
          setError(null);
          alert(
            "На ваш адрес электронной почты отправлено письмо с инструкциями по восстановлению пароля."
          );
        } else {
          setError(response.data.message);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    // При отправке формы вызовите функцию handleSubmit.
    return () => {
      document.querySelector("form").addEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <Container className="w-50">
      <FormControl
        placeholder="Введите адрес электронной почты"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {error && <div className="alert alert-danger">{error}</div>}
      <Button variant="primary" disabled={error} onClick={handleSubmit}>
        Восстановить пароль
      </Button>
    </Container>
  );
};

export default PasswordReset;
