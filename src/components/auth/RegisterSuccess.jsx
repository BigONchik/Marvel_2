import { Box, Button, Typography } from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ height: 500, textAlign: "center", marginTop: "5%" }}>
      <Typography sx={{ fontSize: "28px" }}>
        Вы успешно зарегистрировались :)
      </Typography>
      <Button onClick={() => navigate("/")}>Продолжить</Button>
    </Box>
  );
};

export default RegisterSuccess;
