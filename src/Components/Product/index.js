import { Button } from "@material-ui/core";
import { useState } from "react";

const Product = ({ useProduct }) => {
  const [discount, setDiscount] = useState(0);

  const [showProduct, setShowProduct] = useState({});

  const [flag, setFlag] = useState(false);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const onClick = () => {
    const genNumber = randomNumber(1, 6);
    const genDiscount = randomNumber(40, 90);
    setDiscount(genDiscount);
    const findProduct = useProduct.find((prd) => prd.id === genNumber);
    setShowProduct(findProduct);
    setFlag(true);
  };

  //   Nome do Produto
  // Preço original;
  // Porcentagem do desconto;
  // Valor do desconto;
  // Preço a ser pago,
  // Botão para adicionar ao seu carrinho.

  return (
    <div>
      <Button onClick={() => onClick()} variant="contained">
        Gerar promoção!
      </Button>
      {flag ? (
        <div>
          <h1>{showProduct.name}</h1>
          <h2>Preço original: R${showProduct.price.toFixed(2)}</h2>
          <h3>Desconto obtido: {discount}% </h3>
          <h4>
            Preço abatido: {((showProduct.price * discount) / 100).toFixed(2)}
          </h4>
          <h5>
            Valor final do produto:{" "}
            {((showProduct.price * (100 - discount)) / 100).toFixed(2)}{" "}
          </h5>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
