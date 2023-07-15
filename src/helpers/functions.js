export const getTokens = () => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const Authorization = `Token ${tokens.access}`;
  const config = {
    headers: {
      Authorization,
    },
  };
  return config;
};

