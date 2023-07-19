export const getTokens = () => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  if (tokens && tokens.access) {
    const Authorization = `Token ${tokens.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    return config;
  } else {
    // Обработка случая, когда значение tokens или tokens.access отсутствует
    // Возвращаем пустой объект или выбрасываем ошибку, в зависимости от логики приложения
    return {}; // или throw new Error("Missing tokens.access");
  }
};


export const calcSubPrice = (product) => {
  return +product.count * product.item.price;
};

export const getCountProductsInCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
};
