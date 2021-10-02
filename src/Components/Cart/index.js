import "./styles.css";

const Cart = ({ cart, anotherFlag }) => {
  const cartTotal = cart.reduce((acc, item) => {
    const numPrice = Number(item.finalPrice);
    return acc + numPrice;
  }, 0);

  return (
    <div>
      {anotherFlag && <h1>Total da compra: {Number(cartTotal.toFixed(2))}</h1>}
      <ul>
        {anotherFlag &&
          cart.map((prd, index) => {
            return (
              <li key={index}>
                <h2> {prd.name} </h2>
                <h3> R${prd.price} </h3>
                <h4>Desconto obtido: {prd.discountPercentage}% </h4>
                <h5>Preço abatido: R${Number(prd.discountPrice).toFixed(2)}</h5>
                <h6>
                  Valor final do produto: R$
                  {Number(prd.finalPrice).toFixed(2)}
                </h6>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cart;
