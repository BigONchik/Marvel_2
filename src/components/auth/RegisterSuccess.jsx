import { Button } from "react-bootstrap";

import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="Auth">
      <p> Вы успешно зарегистрировались :)</p>
      <div className="auth__buttons-div">
        <Button
          className=" btn-danger"
          // style={{ marginLeft: "13%" }}
          onClick={() => navigate("/")}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
