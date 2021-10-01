const ProductList = ({ useProduct }) => {
  return (
    <div>
      <ul>
        {useProduct.map((prd) => {
          return (
            <li>
              <h2> {prd.name} </h2>
              <h3> {prd.price} </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
