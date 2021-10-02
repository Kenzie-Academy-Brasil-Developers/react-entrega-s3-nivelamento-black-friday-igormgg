import { Button } from "@material-ui/core";
import "./styles.css";

const Product = ({
  useProduct,
  cart,
  setCart,
  showProduct,
  setShowProduct,
  discount,
  setDiscount,
  flag,
  setFlag,
  setAnotherFlag,
}) => {
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

  const promoProduct = {
    name: showProduct.name,
    price: showProduct.price,
    discountPercentage: discount,
    discountPrice: ((showProduct.price * discount) / 100).toFixed(2),
    finalPrice: ((showProduct.price * (100 - discount)) / 100).toFixed(2),
  };

  const handleClick = (prod) => {
    setCart([...cart, prod]);
    setAnotherFlag(true);
  };

  return (
    <div>
      <Button onClick={() => onClick()} variant="contained">
        Gerar promoção!
      </Button>
      {flag && (
        <div>
          <h1>{promoProduct.name}</h1>
          <h2>Preço original: R${promoProduct.price.toFixed(2)}</h2>
          <h3>Desconto obtido: {promoProduct.discountPercentage}% </h3>
          <h4>
            Preço abatido: R${Number(promoProduct.discountPrice).toFixed(2)}
          </h4>
          <h5>
            Valor final do produto: R$
            {Number(promoProduct.finalPrice).toFixed(2)}{" "}
          </h5>
          <Button variant="outlined" onClick={() => handleClick(promoProduct)}>
            Adicionar ao carrinho
          </Button>
        </div>
      )}
    </div>
  );
};

export default Product;
