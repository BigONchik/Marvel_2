import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Container, FormControl, Button } from "react-bootstrap";
import { API } from "../../helpers/consts";
import "./Auth.css"

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const formRef = useRef(null); // Создаем ссылку на элемент формы

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
    const formElement = formRef.current; // Получаем ссылку на элемент формы
    if (formElement) {
      formElement.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (formElement) {
        formElement.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <Container className="w-50">
      <form ref={formRef}>
        {" "}
        {/* Используем ссылку на элемент формы */}
        <FormControl
          placeholder="Введите адрес электронной почты"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {error && <div className="alert alert-danger">{error}</div>}
        <Button className="btn-danger" disabled={error} type="submit">
          Отправить письмо для восстановления пароля
        </Button>
      </form>
    </Container>
  );
};

export default PasswordReset;
